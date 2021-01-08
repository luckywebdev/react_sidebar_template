import React, { createContext } from 'react';

const SidebarContext = createContext({
  sideActive: false,
  toggleSidebar: () => {},
  mouseTogglesidebar: (type) => {}
});

export default SidebarContext;