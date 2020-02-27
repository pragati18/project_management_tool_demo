import React from 'react';
const Employees = React.lazy(() => import('./views/Add/Employees'));
const Projects = React.lazy(() => import('./views/Add/Projects'));
const projectDetails = React.lazy(() => import('./views/Details/Projects'));
const employeesDetails= React.lazy(() => import('./views/Details/Employees'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/details/projects', name: 'Projects Details', component: projectDetails },
  { path: '/details/employees', name: 'Employees Details', component: employeesDetails },
  { path: '/add/employees', name: 'Add Employees', component: Employees },
  {path: '/add/projects', name: 'Add Project', component: Projects}
];

export default routes;
