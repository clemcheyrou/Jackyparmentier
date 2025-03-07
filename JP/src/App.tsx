import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from 'react';
import { Layout } from "./features/Layout";

function App() {
	return (
		<Router>
			<Routes>
				<Route index element={<Layout />}/>
			</Routes>
		</Router>
	);
}

export default App;
