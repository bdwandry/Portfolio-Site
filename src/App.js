import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Page Routes
import NavigationAppBar from "./Navigation-Bar/NavigationAppBar";

function App() {
    return (
        <Router>
            <NavigationAppBar/>
        </Router>
    );
}

export default App;