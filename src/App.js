import './App.css';
import React, { useState, useEffect, createContext, useLayoutEffect } from 'react';
import Router from './Routing/route';

export const Globalinfo = createContext()
function App() {
	return (
		<Globalinfo.Provider>
	
				<Router />
	
		</Globalinfo.Provider>
	);
}

export default App;