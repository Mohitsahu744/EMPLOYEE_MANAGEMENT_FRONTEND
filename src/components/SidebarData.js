import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Employee',
    path: '/employee',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add',
        path: '/emp/Add',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Modify',
        path: '/emp/Modify',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
     
    ]
  },
  {
    title: 'Designation',
    path: '/designation',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add',
        path: '/Product/Add',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Modify',
        path: '/Product/Modify',
        icon: <IoIcons.IoIosPaper />
      },
    
    ]
  },
  {
    title: 'Working',
    path: '/records',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
