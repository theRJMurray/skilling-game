import React from 'react'

const container_styles = {
    width: 300,
    height: '100%',
    background: '#FBFBFB',
    borderLeft: '1px solid #7D7D7D'
}

const menu_styles = {
    border: '1px solid black',
    width: '100%',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer'
}

const Menu = () => {
    return <div style={container_styles}>
        <div style={{display: 'flex'}}>
            <div style={menu_styles}>Inventory</div>
            <div style={menu_styles}>Stats</div>
        </div>
        <div>
        
        </div>
    </div>
}

export default Menu