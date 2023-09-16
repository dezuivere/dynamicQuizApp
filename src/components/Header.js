import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';

function Header() {
    const { user} = useAuth0();
  return (
    <div>
      <nav>
        <div class=" blue-grey lighten-1 nav-wrapper">
          <ul>
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
                <li className="black-text">
                   {user.name}
                </li>
              </>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/" class="white waves-effect waves-light btn black-text"> <strong>Back</strong> </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
