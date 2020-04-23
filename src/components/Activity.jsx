import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Line } from 'rc-progress'
import game from '../json/game'

const container_styles = {
    border: '1px solid black',
    width: 200,
    height: 150,
    borderRadius: 8,
    textAlign: 'center'
}

const Activity = ({ name }) => {
    const selectedView = useSelector(state => state.view);
    const selectedLandmark = useSelector(state => state.landmark);
    let currentImage = game[selectedView][selectedLandmark].activities[name]?.img;
    let currentAction = game[selectedView][selectedLandmark].activities[name]?.action;

    const [time, setTime] = useState(0)
    const [work, setWork] = useState(false)
    useEffect(() => {
        if(work){
            const interval = setInterval(() => {
                if(time < 100) {
                    setTime(time + 25)
                } else {
                    setWork(false)
                    setTime(0)
                }
            }, 1250);

            return () => clearInterval(interval);
        }
    }, [time, work])

    const clickButton = () => {
        if(!work) {
            setWork(true)
        }
    }

    return <div style={container_styles}>
        <div style={{width: 40, height: 40, margin: '10px auto 0'}}>
            <img alt="" src={currentImage} style={{width: 40, height: 40}}/>
        </div>
        <p>{name}</p>
        <Line percent={time} strokeWidth="10" trailWidth="10" strokeColor={time === 100 ? 'green' : 'brown'} strokeLinecap="square" />
        <button onClick={clickButton}>{currentAction}</button>
    </div>
}

export default Activity