import React, { createContext, useContext, useReducer } from 'react';

// context API - creating a store to store data using createContext() function
export const StateContext = createContext();

// creating a provider which takes reducer, initialState and children
// children means to which component data is to be provided
export const Stateprovider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to fetch data we use useContext() function
// we want data from StateContext store
export const useStateValue = () => useContext(StateContext);
