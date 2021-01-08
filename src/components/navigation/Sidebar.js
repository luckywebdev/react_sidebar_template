import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Au/Auxx';
import SidebarContext from '../../context/sidebar.context';
import { routes } from '../../constants/routes';
import * as IoIcons from 'react-icons/io';

const Sidebars = styled.nav`
  width: 5%;
  height: 100vh;
  position: absolute;
  background-color: #060B26;
  top: 0;
  left: -2%;
  transition: 500ms;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 60px 0px 60px 0px;
  &.active {
    width: 15%;
    left: 0;
    transition: 500ms;
    justify-content: flex-start;
    @media all and (max-width: 1440px) {
      width: 20%;
    }
  }
  @media all and (max-width: 1440px) {
    width: 7%;
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
`;

const Ul = styled.ul`
  width: 100%;
  padding-left: 1.5rem;
  .nav-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    &>a {
      width: 100%;
      /* padding: 8px 16px; */
      text-decoration: none;
      color: #FFF;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 1rem;
        display: none;
        text-align: left;
        &.active {
          display: inline;
        }
        &:hover {
          color: #3d2;
          /* font-size: 1.55rem; */
        }
      }
      &:hover {
        /* color: #3d2; */
        /* font-size: 1.55rem; */
      }
    }
    &.active {
      a {
        justify-content: flex-start;
      }
    }
  }
`;

const SubUl = styled.ul`
  width: 100%;
  display: none;
  &.open {
    display: block;
  }
  .sub-nav-text {
    list-style: none;
    &>a {
      width: 100%;
      padding: 8px 0px;
      text-decoration: none;
      color: #FFF;
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 1rem;
        display: none;
        text-align: left;
        &.active {
          display: inline;
        }
      }
      &:hover {
      /* background: #3d2; */
      font-size: 1.2rem;
    }

    }
    &.active {
      a {
        justify-content: flex-start;
      }
    }
  }
`;

const Sidebar = () => {
  const { sideActive, toggleSidebar, mouseTogglesidebar } = useContext(SidebarContext);
  const [selectTitle, setSelectTitle] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(!sideActive) {
        setOpen(false);
    }
  }, [sideActive])

  const toggleSubItem = (title) => {
    if(title === selectTitle){
      setOpen(!open);
    }
    else{
      setSelectTitle(title);
      setOpen(true);
    }
  }

  return (
    <Aux>
      <Sidebars className={sideActive ? "active" : ""} onMouseLeave={() => mouseTogglesidebar(false)}  onMouseEnter={() => mouseTogglesidebar(true)}>
        <Ul>
          {
            routes.map((item, index) => {
              return (
                <li key={index} className={ `${sideActive ? "active" : ""  } ${item.cname}`} >
                  <Link to={item.path} onClick={() => toggleSubItem(item.title)}>
                    {item.icon}
                    <span className={sideActive ? "active" : ""} style={{width: "80%"}}>{item.title}</span>
                    {
                      item.subItem.length > 0 ? (
                        <span className={sideActive ? "active" : ""} style={{marginRight: "1rem"}}>
                          {
                            selectTitle === item.title && open ? (
                              <IoIcons.IoIosArrowUp size={18} />
                            ): (
                              <IoIcons.IoIosArrowDown size={18} />
                            )
                          }
                        </span>
                      ) : ""
                    }
                  </Link>
                  { item.subItem.length > 0 && 
                    <SubUl className={selectTitle === item.title && open ? "open" : ""}>
                      {
                        item.subItem.map((items, index) => {
                          return (
                            <li key={index} className={items.cname} >
                              <Link to={items.path}>
                                {items.icon}
                                <span className={sideActive ? "active" : ""} style={{width: "80%"}}>{items.title}</span>
                              </Link>
                            </li>
                          )
                        })
                      }
                    </SubUl>
                  }
                </li>
              )
            })
          }
        </Ul>
      </Sidebars>
    </Aux>
  )
}

Sidebar.propTypes = {
  sideActive: PropTypes.bool
}

export default Sidebar
