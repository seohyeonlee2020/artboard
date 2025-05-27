import './App.css';
import React from "react"
import Artcard from './components/Artcard'
import Header from './components/Header'

import PageTemplate from './pages/PageTemplate'

/* page imports
import All from './pages/All'
import Projects from './pages/Projects'
import Archive from './pages/Archive' */

const App = () => {
return (
	<div className="App">
		<Header />
		<PageTemplate />
	</div>
)
}

export default App;
