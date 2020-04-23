import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage, landmarkChange } from '../actions'
import game from '../json/game'

const container_styles = {
    width: 240,
    height: '100%',
    background: '#7D7D7D',
    borderRight: '1px solid #D7D7D7'
}

const list_item_styles = {
    background: '#FFF',
    borderBottom: '1px solid black',
    padding: 5,
    userSelect: 'none',
    cursor: 'pointer'
}

const Explore = () => {
    const [exploreList, setExploreList] = useState([])
    const selectedView = useSelector(state => state.view);
    const dispatch = useDispatch();

    const dispatchView = input => {
        dispatch(changePage(input))
        dispatch(landmarkChange(''))
    }

    useEffect(() => {
        let zones = Object.keys(game)
        setExploreList(zones)
    }, [selectedView])

    return <div style={container_styles}>
        {exploreList.map((item, index) => <div onClick={() => dispatchView(item)} key={index} style={list_item_styles}>{item}</div>)}
    </div>
}

export default Explore