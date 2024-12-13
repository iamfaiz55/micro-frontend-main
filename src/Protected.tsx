// src/Protected.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store'; 
import { Navigate } from 'react-router-dom';

interface ProtectedProps {
    compo: React.ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ compo }) => {
  // console.log(reduxStore.getState());
  
  const  {user} = useSelector<RootState , any>((state) => state.auth);


    return user ? <>{compo}</> : <Navigate to="/auth/" />;
};

export default Protected;