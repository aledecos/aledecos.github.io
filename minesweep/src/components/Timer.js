import React, {useState, useEffect} from 'react';


const Timer = ({status, setStatus, newGame, setNewGame, result, t, setT}) => {

    useEffect(() => {
        let interval = null;
        if (status) {
            interval = setInterval(() => {
                setT(t => t+1);
            }, 1000);
        } 
        else if (!status && t !== 0 && newGame) {
            window.clearInterval(interval);
            reset();
        }

        if(newGame)
        {
            reset();
        }
        return () => clearInterval(interval);
    }, [status, t , newGame, result]);

    function start() {
        setStatus(true);
    }
    function stop(){
        setStatus(false);
    }
    function reset(e){
        //e.target.innerHTML = "d"
        //console.log(e.target)
        setStatus(false);
        setT(0);
    }
    const Results = () => (
        <div id="results" className="search-results">
          Some Results
        </div>
    )
    function tryAgain()
    {
        setNewGame(true);
        reset();
    } 
    function winLose()
    {

        if(result === 2)
            return "You Win!"
        else if(result === 1)
        {
            return "Try Again?"
        }
        else
            return "Reset?"
    }   
    return (
        <div>
            <h1>Time Score {t}</h1>
            { !status ? <button onClick ={() => tryAgain()}>{winLose()}</button> : null }
        </div>
    );
}


export default Timer;