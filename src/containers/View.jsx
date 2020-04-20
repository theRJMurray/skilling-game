import React from 'react'

const container_styles = {
    flexGrow: 2,
    background: '#C0FFEE'
}

const View = ({ selectedView }) => {
    let page = {
        Beach: Beach,
        Varoko: Varoko
    }
    let CurrentView = page[selectedView]
    
    return <div style={container_styles}>
        <CurrentView />
    </div>
}

export default View