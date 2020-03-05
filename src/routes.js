import React from 'react';
const User = React.lazy(() => import('./views/Add/User/User.js'));
const Projects = React.lazy(() => import('./views/Add/Projects'));
const ProjectDetails = React.lazy(() => import('./views/Details/Projects'));
const EmployeesDetails= React.lazy(() => import('./views/Details/Employees'));
const Logs = React.lazy(() => import('./views/Add/Logs'));
const EditEmployee = React.lazy(() => import('./views/Edit/Employee'));
const EditProject = React.lazy(() => import('./views/Edit/Project'));
const Oleaves = React.lazy(() => import('./views/Leaves/Official'));
const Eleaves = React.lazy(() => import('./views/Leaves/Empleaves'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/add/user', name: 'Add User', component: User },
  { path: '/details/projects', name: 'Projects Details', component: ProjectDetails },
  { path: '/details/employees', name: 'Employees Details', component: EmployeesDetails },
  {path: '/add/projects', name: 'Add Project', component: Projects},
  {path: '/add/logs', name: 'Add Employee Logs', component: Logs},
  {path: '/edit/employee', name: 'Edit Employee', component: EditEmployee},
  {path: '/edit/project', name: 'Edit Project', component: EditProject},
  {path: '/leaves/eleaves', name: 'Employee Leaves', component: Eleaves},
  {path: '/leaves/oleaves', name: 'Official Leaves', component: Oleaves},
  
];

export default routes;