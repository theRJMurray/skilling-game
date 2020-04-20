import React from 'react'
import Beach from '../zones/Beach'
import Varoko from '../zones/Varoko'
import { useSelector } from "react-redux"

const container_styles = {
    flexGrow: 2,
    background: '#C0FFEE'
}

const View = () => {
    const selectedView = useSelector(state => state.view);

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