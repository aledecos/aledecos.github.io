import React, {useState, useEffect, useRef} from 'react';
import './Minesweeper.css';
import flag from './download.png' // relative path to image 
import bomb from './bomb.jpg' // relative path to image 


const Minesweeper = ({diff, newGame, setNewGame , setStatus, setResult, t}) => {
    const ref = useRef();
    let container = null;
    // private constants
    const STATE_HIDDEN = "hidden";
    const STATE_SHOWN = "shown";
    const STATE_MARKED = "marked";

    const [ye, haw] = useState(false);
    const [nrows, setNrows] = useState(8);
    const [ncols, setNcols] = useState(10);
    const [nmines, setNmines] = useState(10);
    const [nmarked, setNmarked] = useState(0);
    const [nuncovered, setNuncovered] = useState(0);
    const [exploded, setExploded] = useState(false);
    const [arr, setArr] = useState(array2d( 8, 10, () => ({mine: false, state: STATE_HIDDEN, count: 0})));



    function array2d( nrows, ncols, val) {
        const res = [];
        for( let row = 0 ; row < nrows ; row ++) {
            res[row] = [];

            for( let col = 0 ; col < ncols ; col ++)
                res[row][col] = val(row,col);
        }
        return res;
    }

    function rndInt(min, max) {
        [min,max] = [Math.ceil(min), Math.floor(max)]
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function init(nrows, ncols, nmines) {
        setNrows(nrows);
        setNcols(ncols);
        setNmines(nmines);
        setNmarked(0);
        setNuncovered(0);
        setExploded(false);
        // create an array
        setArr(array2d(
          nrows, ncols,
          () => ({mine: false, state: STATE_HIDDEN, count: 0}))
        );
    }
    function validCoord(row, col) {
        return row >= 0 && row < nrows && col >= 0 && col < ncols;
    }

    function count(row,col) {
        const c = (r,c) =>
              (validCoord(r,c) && arr[r][c].mine ? 1 : 0);
        let res = 0;
        for( let dr = -1 ; dr <= 1 ; dr ++ )
          for( let dc = -1 ; dc <= 1 ; dc ++ )
            res += c(row+dr,col+dc);
        return res;
    }
    function sprinkleMines(row, col) {
        // prepare a list of allowed coordinates for mine placement
        let allowed = [];
        for(let r = 0 ; r < nrows ; r ++ ) {
            for( let c = 0 ; c < ncols ; c ++ ) {
                if(Math.abs(row-r) > 2 || Math.abs(col-c) > 2)
                allowed.push([r,c]);
            }
        }
        setNmines(Math.min(nmines, allowed.length));

        for( let i = 0 ; i < nmines ; i ++ ) {
            let j = rndInt(i, allowed.length-1);
            [allowed[i], allowed[j]] = [allowed[j], allowed[i]];
            let [r,c] = allowed[i]; 


            let a = arr.slice();
            a[r][c].mine = true;
            setArr(a);
        }
        // erase any marks (in case user placed them) and update counts
        for(let r = 0 ; r < nrows ; r ++ ) {
            for( let c = 0 ; c < ncols ; c ++ ) {
                if(arr[r][c].state === STATE_MARKED)
                {
                    let a = arr.slice();
                    a[r][c].state = STATE_HIDDEN;
                    setArr(a);
                }
                let a = arr.slice();
                a[r][c].count = count(r,c);
                setArr(a);
            }
        }
        let mines = []; let counts = [];
        for(let row = 0 ; row < nrows ; row ++ ) {
            let s = "";
            for( let col = 0 ; col < ncols ; col ++ ) {
                s += arr[row][col].mine ? "B" : ".";
            }
            s += "  |  ";
            for( let col = 0 ; col < ncols ; col ++ ) {
                s += arr[row][col].count.toString();
            }
            mines[row] = s;
        }
        console.log("Mines and counts after sprinkling:");
        console.log(mines.join("\n"), "\n");
    }
        // uncovers a cell at a given coordinate
    // this is the 'left-click' functionality
    async function uncover(row, col) {
        if(!exploded)
        {
            setStatus(true);
            console.log("uncover", row, col);
            // if coordinates invalid, refuse this request
            if( ! validCoord(row,col)) return false;
            // if this is the very first move, populate the mines, but make
            // sure the current cell does not get a mine
            if( nuncovered === 0)
                sprinkleMines(row, col);
            // if cell is not hidden, ignore this move
            if( arr[row][col].state !== STATE_HIDDEN) return false;
            // floodfill all 0-count cells
            const ff = (r,c) => {
                if( ! validCoord(r,c)) return;
                if( arr[r][c].state !== STATE_HIDDEN) return;
                    setNuncovered(nuncovered => nuncovered + 1);
                let a = arr.slice();
                a[r][c].state = STATE_SHOWN;
                setArr(a);

                if( arr[r][c].count !== 0) return;

                ff(r-1,c-1);ff(r-1,c);ff(r-1,c+1);
                ff(r  ,c-1);         ;ff(r  ,c+1);
                ff(r+1,c-1);ff(r+1,c);ff(r+1,c+1);
            };
            await ff(row,col);
            // have we hit a mine?
            if( arr[row][col].mine) {
                setExploded(true);
            }
        }
        return true;
    }
    // puts a flag on a cell
    // this is the 'right-click' or 'long-tap' functionality
    async function mark(row, col) {
        if(!exploded)
        {
            setStatus(true);
            console.log("mark", row, col);
            // if coordinates invalid, refuse this request
            if( ! validCoord(row,col)) return false;
            // if cell already uncovered, refuse this
            console.log("marking previous state=", arr[row][col].state);
            if( arr[row][col].state === STATE_SHOWN) return false;
            // accept the move and flip the marked status
            let b = arr[row][col].state === STATE_MARKED ? -1 : 1;
            await setNmarked(nmarked => nmarked + b);
            //await setNmarked(nmarked => nmarked + arr[row][col].state === STATE_MARKED ? -1 : 1);
            console.log("After" + nmarked);
            let a = arr.slice();
            a[row][col].state = arr[row][col].state === STATE_MARKED ? STATE_HIDDEN : STATE_MARKED;
            await setArr(a);
        }

        return true;
    }
    // returns array of strings representing the rendering of the board
    //      "H" = hidden cell - no bomb
    //      "F" = hidden cell with a mark / flag
    //      "M" = uncovered mine (game should be over now)
    // '0'..'9' = number of mines in adjacent cells
    function getRendering() {
        const res = [];
        for( let row = 0 ; row < nrows ; row ++) {
          let s = "";
          for( let col = 0 ; col < ncols ; col ++ ) {
            let a = arr[row][col];
            if( exploded && a.mine) s += "M";
            else if( a.state === STATE_HIDDEN) s += "H";
            else if( a.state === STATE_MARKED) s += "F";
            else if( a.mine) s += "M";
            else s += a.count.toString();
          }
          res[row] = s;
        }
        return res;
    }

    function getStatus() {
        let done = exploded || nuncovered === this.nrows * this.ncols - this.nmines;
        return {
          done: done,
          exploded: exploded,
          nrows: nrows,
          ncols: ncols,
          nmarked: nmarked,
          nuncovered: nuncovered,
          nmines: nmines
        }
    }

    useEffect(() => {

        if(newGame === true)
        {
            if(diff === "Easy")
            {
                console.log(1);
                init(8, 10, 10);
                //init(5, 5, 3);
            }
            else if(diff === "Medium"){
                init(14, 18, 40);
                console.log(2);
            }
            else{
                init(20, 24, 99);
                console.log(3);
            }

            setNewGame(false);
            setResult(0);
        }
        if(exploded)
        {
            console.log(1)
            setStatus(false);
            setResult(1);
        }
        let total = nrows*ncols
        // console.log("Exploded " + exploded);
        console.log("nuncovered " + nuncovered);
        // console.log("total-mines " + total-nmines);
        // console.log("total-mines " + nmines);
        // console.log("Marked " + nmarked);
        if(!exploded && nuncovered === (total-nmines) && nmines===nmarked )
        {
            console.log("Win")
            setStatus(false);
            setResult(2);
        }
        

        container = ref.current;

        let nbuttons = nrows*ncols;
        let buttonSize = container.clientWidth / ncols;
        console.log(buttonSize);
    
        
        container.style.gridTemplateColumns = `repeat(${ncols}, ${buttonSize}px)`;
        container.style.gridTemplateRows = `repeat(${nrows}, ${buttonSize}px)`;


 
    }, [nrows, ncols, nmarked, exploded, diff, newGame ]);
    
    function contextMenu (e,z,i) {
        e.preventDefault();
        mark(z,i);

    }
    function myfunction() {
        console.log("CLICKED");
    }

    function visual ()
    {

        let v = getRendering();
        let d = [];
        let counter = 0;
        for (let z = 0; z < v.length; z++){
            for (let i = 0; i < v[z].length; i++) {
                counter++;
                if(v[z][i] === "H")
                {
                    d.push(<button key={counter} onClick={() => uncover(z,i)} onContextMenu={(e) => contextMenu(e,z,i)}></button>)
                }
                else if (v[z][i] === "F")
                {
                    d.push(
                        <button key={counter} onClick={() => uncover(z,i)} onContextMenu={(e) => contextMenu(e,z,i)}>
                            <img src={flag} onClick={myfunction} />
                        </button>
                    )
                }
                else if(v[z][i] === "M")
                {
                    d.push(
                        <button key={counter} onClick={() => uncover(z,i)} onContextMenu={(e) => contextMenu(e,z,i)}>
                            <img src={bomb} onClick={myfunction} />
                        </button>
                    )
                }
                else
                {
                    d.push(<button key={counter} onClick={() => uncover(z,i)} onContextMenu={(e) => contextMenu(e,z,i)}>{v[z][i]}</button>)
                }
            } 
        }


        return d;
    }
    
    return (
        <div>
            <h1>Remaining Flags: {nmines-nmarked}</h1>
            <div id="btnContainer" ref={ref}>  
                {visual()}
            </div>
        </div>
    );
}


export default Minesweeper;