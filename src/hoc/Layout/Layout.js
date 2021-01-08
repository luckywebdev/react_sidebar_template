import React, { useState } from 'react'
import styled from '@emotion/styled';
import Aux from '../Au/Auxx';
import Navigatebar from '../../components/navigation/Navigatebar';
import Sidebar from '../../components/navigation/Sidebar';
import SidebarContext from '../../context/sidebar.context';

const Main = styled.div`
  width: 100%;
  margin-top: 56px;
  background: #ffa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;

function Layout(props) {
  const [sideActive, setSideActive] = useState(false);
  const toggleSidebar = () => setSideActive(!sideActive);
  const mouseTogglesidebar = (type) => setSideActive(type);

  return (
    <Aux>
      <SidebarContext.Provider value={{sideActive, toggleSidebar, mouseTogglesidebar}} >
        <Navigatebar  />
        <Sidebar />
      </SidebarContext.Provider>
      <Main>
        {props.children}
      </Main>
    </Aux>
  )
}

export default Layout
