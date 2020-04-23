import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { landmarkChange } from '../actions'
import Activity from '../components/Activity'
import game from '../json/game'

const View = () => {
    //Use selectedView to determine available landmarks
    const selectedView = useSelector(state => state.view);
    const [landmarks, setLandmarks] = useState([])
    useEffect(() => {
        if (selectedView) {
            let landmarks = Object.keys(game[selectedView])
            setLandmarks(landmarks)
        }
    }, [selectedView])

    //Use selectedLandmark to determine available activities
    const selectedLandmark = useSelector(state => state.landmark);
    const [activities, setActivities] = useState([])
    useEffect(() => {
        if (selectedLandmark) {
            let activities = Object.keys(game[selectedView][selectedLandmark].activities)
            setActivities(activities)
        } else {
            setActivities([])
        }
    }, [selectedView, selectedLandmark])

    //Redux Action(s)
    const dispatch = useDispatch();
    const dispatchLandmark = input => {
        dispatch(landmarkChange(input))
    }

    return <div style={{ width: '100%', height: '100%', background: '#FFF', overflow: 'auto'}}>
        {/* Header Container */}
        <div style={{ width: '50%', margin: '20px auto', padding: 10}}>
            {/* Title */}
            <p style={{textAlign: 'center'}}>{selectedView}</p>

            {/* Landmarks */}
            <div style={{width: 200, border: '1px solid black', padding: 10, borderRadius: 4, textAlign: 'center', cursor: 'default'}}>
                <p style={{borderBottom: '1px solid black'}}>Landmarks</p>
                {landmarks.map((e, i) => <p onClick={() => dispatchLandmark(e)} key={i} style={{useSelect: 'none', cursor: 'pointer'}}>{e}</p>)}
            </div>
        </div>

        {/* Activities */}
        {activities.length ? <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {activities.map((e, i) => <Activity key={i} name={e} />)}
        </div> : null}
    </div>
}

export default View