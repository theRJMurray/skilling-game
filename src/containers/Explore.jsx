import React from 'react'

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

const Explore = ({ handleViewChange }) => {
    const changeView = input =>{ 
        handleViewChange(input);
    }

    return <div style={container_styles}>
        {
            zones.map((s, i) => 
                <div onClick={() => changeView(s)} key={i} style={list_item_styles}>{s}</div>
            )
        }
    </div>
}

export default Explore