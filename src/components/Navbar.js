import React from "react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <nav>
        <div className=" blue-grey lighten-1 nav-wrapper">
          <a href="#" className="black-text text-darken-2 brand-logo ms-2">
            <strong>APIELITE-5</strong>
          </a>
          <ul id="nav-mobile" className=" right hide-on-med-and-down">
          <li>
              <strong>
                <Link className="medium black-text text-darken-2" to={'/about'}>
                  About Us
                </Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link className="medium black-text text-darken-2" to={'/apidoc'}>
                  API DOC
                </Link>
              </strong>
            </li>
          
            {isAuthenticated ? (
              <>
                <li>
                  <Link to={'/profile'} >
                    <img  src={user.picture} alt={user.name} 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <button className="white btn me-2 black-text"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    style={{
                      background: 'none',
                      border: '1px solid #ccc',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    <strong>Log Out</strong>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button className="white btn black-text" onClick={() => loginWithRedirect()}
                style={{
                  background: 'none',
                  border: '1px solid #ccc',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
                >
                  <strong>Log In</strong>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
