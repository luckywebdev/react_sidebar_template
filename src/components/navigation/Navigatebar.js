import React, { useContext} from 'react';
import Aux from '../../hoc/Au/Auxx';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarContext from '../../context/sidebar.context';

const Navbars = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 0;
  background-color: #1E1E1E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  z-index: 10;
`;

const Navigatebar = () => {
  const { sideActive, toggleSidebar } = useContext(SidebarContext);
  return (
    <Aux>
      <Navbars>
        {
          sideActive ? (
            <AiIcons.AiFillCloseCircle color="white" size={40} onClick={toggleSidebar} />
          ) : (
            <FaIcons.FaBars color="white" size={40} onClick={toggleSidebar} />
          )
        }
      </Navbars>
    </Aux>
  )
};

export default Navigatebar
