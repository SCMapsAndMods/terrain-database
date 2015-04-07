this.kAdminConfig = {
  name: 'Terrain Items',
  collections: {
    TerrainItem : {
      tableColumns: [
        {label: 'Title', name: 'title'},
      ]
    }
  },
  dashboard: {
    homeUrl: '/admin'
  }
}

// Run in shell:

// user = Meteor.users.findOne();
// Roles.addUsersToRoles(user, ['admin', 'staff'])