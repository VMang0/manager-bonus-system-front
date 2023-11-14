import React from 'react';

import {
  DragIndicatorOutlined,
  PermIdentityOutlined,
  ShoppingBagOutlined,
  ChecklistOutlined,
  Settings,
} from '@mui/icons-material';

export const navMenu = [
  {
    name: 'Главная',
    icon: <DragIndicatorOutlined />,
    path: '/test',
  },
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
  {
    name: 'Managers',
    icon: <ChecklistOutlined />,
    path: '/managers',
  },
  {
    name: 'Главная',
    icon: <Settings />,
    path: '/test',
  },
];
