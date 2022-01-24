import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Page Routes
import NavigationAppBar from "./Navigation-Bar/NavigationAppBar";
import Home from './Page-Information/main';
import About from './Page-Information/about';
import Contact from './Page-Information/contact';
import Resume from './Page-Information/resume'
import Minecraft from './Page-Information/minecraft'

function App() {
    return (
        <Router>
            <NavigationAppBar/>
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/resume' element={<Resume/>} />
                <Route path='/minecraft' element={<Minecraft/>} />
            </Routes>
        </Router>
    );
}

export default App;