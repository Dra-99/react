import React from 'react'
import * as Pages from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import RouteAnimate from './RouteAnimate';


export default function App() {
    return (
        <div className="container">
            <Router>
                <div>
                    <Pages.NavBar></Pages.NavBar>
                </div>
                <div className="content">
                    <RouteAnimate path="/" exact component={Pages.Home}></RouteAnimate>
                    <RouteAnimate path="/set" exact component={Pages.Set}></RouteAnimate>
                    <RouteAnimate path="/personal" exact component={Pages.Personal}></RouteAnimate>
                </div>
            </Router>
        </div>
    )
}
