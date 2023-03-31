import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Department } from './Department';
import { Employee } from './Employee';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
    return (
        <div className="App container">
            <h3 className="d-flex justify-content-center m-3">
                React JS FrontEnd
            </h3>

            <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item- m-1">
                        <NavLink className="btn btn-light btn-outline-primary" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="btn btn-light btn-outline-primary" to="/Department">
                            Department
                        </NavLink>
                        <NavLink className="btn btn-light btn-outline-primary" to="/Employee">
                            Employee
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default App;
