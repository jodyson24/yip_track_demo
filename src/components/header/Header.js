import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Mobile from './Mobile';

export default function Header() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="Header">
                <nav className="d-flex">
                    <div className="logo d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#8b7cdb" class="bi bi-geo-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                        </svg>
                        <h5>CellTrak</h5>
                    </div>

                    <div className="menu">
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li> <Link>Services</Link> </li>
                            <li><Link>About us</Link></li>
                            <li><Link>Our team</Link></li>
                            <li><Link>Contact us</Link></li>
                            <li><Link>Developers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <input className="search-bar"
                            placeholder="Search our website"
                        />
                    </div>

                    <div className="hide-icon"
                        onClick={e => setShow(!show)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#8b7cdb" class="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
                            <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z" />
                        </svg>
                    </div>
                </nav>

                {show && <Mobile show={show} setShow={setShow} />}
            </div>
        </>
    );
}
