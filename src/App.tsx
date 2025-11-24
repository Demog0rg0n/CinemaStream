import React, { useState } from 'react'

import Header from './components/Header'
import Router from './Router'
import "./styles/index.scss"


const App: React.FC = () => {

	const [theme, setTheme] = useState("dark")

	return (
		<div className='App'>
			<Header />
			<Router />
		</div>
	)
}

export default App