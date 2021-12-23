import './App.css';
import LoginPage from './components/LoginPage/login';
import SignUpPage from './components/signUpPage/signUp';
import DashBoard from './components/Dasdhboard/dashboard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return ( <
        div className = "App" >



        { /* <LoginPage/> */ } { /* <SignUpPage/> */ }

        <
        Router >
        <
        Routes >
        <
        Route path = '/'
        element = { < LoginPage / > }
        /> <
        Route path = '/signUp'
        element = { < SignUpPage / > }
        /> <
        Route path = '/dashboard'
        element = { < DashBoard / > }
        /> < /
        Routes > <
        /Router>

        <
        /div>
    );
}

export default App;