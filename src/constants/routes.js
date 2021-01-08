import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa';

export const routes = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome size={32} />,
    cname: 'nav-text',
    subItem: []
  },
  {
    title: 'Post',
    path: '/',
    icon: <FaIcons.FaNewspaper size={32} />,
    cname: 'nav-text',
    subItem: [
      {
        title: 'First Post',
        path: '/',
        icon: <FaIcons.FaNewspaper />,
        cname: 'sub-nav-text',
        subItem: []
      },
      {
        title: 'Second Post',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cname: 'sub-nav-text',
        subItem: []
      },
    ]
  },
  {
    title: 'About',
    path: '/',
    icon: <FcIcons.FcAbout size={32} />,
    cname: 'nav-text',
    subItem: []
  },
  {
    title: 'Help',
    path: '/',
    icon: <IoIcons.IoIosHelpCircle size={32} />,
    cname: 'nav-text',
    subItem: []
  }
] 