import React, { useContext } from 'react';

export const NavContext = React.createContext({
  screen: 'dashboard',
  params: null,
  navigate: () => {},
});

export const useNav = () => useContext(NavContext);