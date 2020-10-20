import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Difficulty = ({diff, setDiff, setNewGame, setStatus}) => {
    function setEasy()
    {
        setDiff("Easy");
        setNewGame(true);
        setStatus(false);
    }
    function setMedium()
    {
        setDiff("Medium");
        setNewGame(true);
        setStatus(false);
    }
    function setHard()
    {
        setDiff("Hard");
        setNewGame(true);
        setStatus(false);
    }
    return (
        <div>
            <DropdownButton id="DiffSelect" title={diff}>
                <Dropdown.Item href="#/action-1" onClick ={() => setEasy()}>Easy</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick ={() => setMedium()}>Medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick ={() => setHard()}>Hard</Dropdown.Item>
            </DropdownButton>
        </div>
        

    );
}


export default Difficulty;