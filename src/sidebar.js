export default {
  items: [
    {
      name: 'Admin Actions',
      url: '/details/projects',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Project',
      url: '/add',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Project List',
          url: '/details/projects',
          icon: 'icon-list',
        },
        {
          name: 'Add Project',
          url: '/add/projects',
          icon: 'icon-plus',
        },   
      ],
    },
    {
      name: 'Employee',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Employee List',
          url: '/details/employees',
          icon: 'icon-list',
        },
        {
          name: 'Add Employee',
          url: '/add/employees',
          icon: 'icon-plus',
        },
      ],
    },
  ],
};
