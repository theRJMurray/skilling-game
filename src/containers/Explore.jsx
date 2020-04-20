import React from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from '../actions'

const container_styles = {
    width: 240,
    height: '100%',
    background: '#7D7D7D',
    borderRight: '1px solid #FBFBFB'
}

const list_item_styles = {
    background: '#FFF',
    borderBottom: '1px solid black',
    padding: 5,
    userSelect: 'none',
    cursor: 'pointer'
}

const zones = [
    'Beach', 'Varoko'
]

const Explore = () => {
    const dispatch = useDispatch();
    const dispatchView = input => {
        dispatch(changePage(input))
    }

    return <div style={container_styles}>
        {
            zones.map((s, i) => 
                <div onClick={() => dispatchView(s)} key={i} style={list_item_styles}>{s}</div>
            )
        }
    </div>
}

export default Explore