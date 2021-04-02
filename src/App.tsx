import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import contact from './pages/contact'
import Navbar from './components/Navbar'


function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Route exact path="/" component={Index} ></Route>
            <Route path="/contact" component={contact} ></Route>
        </div>
    );
}

export default App;
