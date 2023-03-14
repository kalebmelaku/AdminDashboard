import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGrip,faTable , faChartLine, faClipboard, faPerson, faLock} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default class SideNav extends React.Component { 
    render() { 
        return (
            <nav id="sidebar">
            <ul className="list-unstyled">
                <li className="sidebar-item active">
                    <Link className="sidebar-link"  to="/">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faHouse} />
                        </svg><span>Home </span>
                    </Link>
                </li>
                <li className="sidebar-item">
                <Link className="sidebar-link" to="/chat">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faGrip} />
                    </svg>
                    <span>Chat</span>
                </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" to="/grid">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faChartLine} />
                    </svg><span>Grid </span>
                </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" to="/login">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faClipboard} />
                    </svg><span>Login </span>
                </Link></li>

                <li className="sidebar-item">
                    <Link className="sidebar-link" to="/profile">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faPerson} />
                    </svg><span>Profile </span>
                </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" to="/signup">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faLock} />
                    </svg><span>Signup </span>
                </Link>
                </li>
                <li className="sidebar-item">
                    <Link className="sidebar-link" to="/table">
                    <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                        <FontAwesomeIcon icon={faTable} />
                    </svg><span>Table </span>
                </Link>
                </li>
            </ul>

        </nav>
        )
    }
}