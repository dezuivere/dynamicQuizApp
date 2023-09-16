import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {isAuthenticated} = useAuth0();
  return (
    <>
        
        {
            isAuthenticated?(
                <li>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
                </button>
                </li>
            ):(
                <li><button onClick={() => loginWithRedirect()}>Log In</button>;</li>
            )
        }
        
    </>
  )
};

export default LoginButton;