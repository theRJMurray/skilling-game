import React, { useState } from 'react';
import Explore from './containers/Explore'
import View from './containers/View'
import Menu from './containers/Menu'
import './main.css';


const App = () => {
	const [selectedView, setSelectedView] = useState('Beach')

	const handleViewChange = input => {
		setSelectedView(input)
	}

	return <div className='container'>
		<Explore handleViewChange={handleViewChange} />
		<View selectedView={selectedView} />
		<Menu />
	</div>
}

export default App;
