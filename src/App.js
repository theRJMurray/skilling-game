import React from 'react';
import Explore from './containers/Explore'
import View from './containers/View'
import Menu from './containers/Menu'
import './main.css';


const App = () => {
	return <div className='container'>
		<Explore />
		<View />
		<Menu />
	</div>
}

export default App;
