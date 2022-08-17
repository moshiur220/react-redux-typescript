import React from 'react'
import { Navigate } from "react-router-dom";
import { getAuthUser } from '../config/url';

function PrivateRoutes({ children }:any) {
   const token = getAuthUser().access_token
   console.log(token);
   
//   const access_token  = false;
	return !token ? <Navigate to='/login' /> : children;
}

export default PrivateRoutes