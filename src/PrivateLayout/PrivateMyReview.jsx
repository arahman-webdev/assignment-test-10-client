import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';
import { Player } from "lottie-react";
import loadingAnimation from "./path-to-your-loading-animation.json"; // Import the animation JSON file

const PrivateMyReview = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
          <div className="min-h-screen items-center justify-center flex">
            <Player
              autoplay
              loop
              src={loadingAnimation}
              style={{ height: "150px", width: "150px" }}
            />
          </div>
        );
      }
    if (user) {
        return children
    }
    return (

        <Navigate to='/auth/login'></Navigate>
    );
};

export default PrivateMyReview;