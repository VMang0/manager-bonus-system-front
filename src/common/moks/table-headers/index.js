import React from 'react';
import { Avatar } from '@mui/material';

//таблица активации пользователей
export const tableHeaderActivateUsers = [
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'role', headerName: 'Role', width: 200 },
];

//таблица менеджеров
export const tableHeaderManagers = [
  {
    field: 'number',
    headerName: 'No',
    renderCell: (params) => <>{params.row.number}</>,
    width: 50,
  },
  {
    field: 'image',
    headerName: '',
    renderCell: (params) => <Avatar alt='profile' src={params.row.image} />,
    sortable: false,
    filterable: false,
    width: 100,
  },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'lastname', headerName: 'Lastname', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'company', headerName: 'Company', width: 150 },
  { field: 'position', headerName: 'Position', width: 180 },
  { field: 'date', headerName: 'Date', width: 150 },
];

//таблица с сотрудниками при создании проекта
export const tableHeaderEmployees = [
  {
    field: 'image',
    headerName: '',
    renderCell: (params) => <Avatar alt='profile' src={params.row.image} />,
    sortable: false,
    filterable: false,
    width: 70,
  },
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'lastname', headerName: 'Lastname', width: 100 },
  { field: 'position', headerName: 'Position', width: 100 },
  { field: 'rang', headerName: 'Rang', width: 100 },
];
