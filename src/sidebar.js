export default {
  items: [
    {
      name: 'Admin Actions',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Project',
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
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Employee List',
          url: '/details/employees',
          icon: 'icon-list',
        },
        {
          name: 'Add Employee Logs',
          url: '/add/logs',
          icon: 'icon-plus',
        },
      ],
    },

    {
      name: 'Leaves',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add Employee Leaves',
          url: '/leaves/eleaves',
          icon: 'icon-plus',
        },
        {
          name: 'Add Official Leaves',
          url: '/leaves/oleaves',
          icon: 'icon-plus',
        },
      ],
    },
  ],
};
