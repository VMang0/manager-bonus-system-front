import React from 'react';

import {
  DragIndicatorOutlined,
  PermIdentityOutlined,
  ShoppingBagOutlined,
} from '@mui/icons-material';

export const navMenuManager = [
  {
    name: 'Users',
    icon: <PermIdentityOutlined />,
    path: '/user/activate',
  },
  {
    name: 'Projects',
    icon: <ShoppingBagOutlined />,
    path: '/projects',
  },
];

export const navMenuAdmin = [
  {
    name: 'Список менеджеров',
    icon: <DragIndicatorOutlined />,
    path: '/managers',
  },
  {
    name: 'Projects',
    icon: <ShoppingBagOutlined />,
    path: '/projects',
  },
];

export const navMenuEmployee = [
  {
    name: 'Projects',
    icon: <ShoppingBagOutlined />,
    path: '/projects',
  },
];
