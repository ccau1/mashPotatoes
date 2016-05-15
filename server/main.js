import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    addUser: (credentials, roles) => {



        if (credentials.password != credentials.confirmPassword) {
            throw new Meteor.Error(500, 'Password must match Confirm Password', 'Password must match Confirm Password');
        }

        let id = Accounts.createUser(credentials);
        if (roles && roles.length) {
            lodash.each(roles, function(role) {
                Roles.addUsersToRoles(id, role, 'default');
            });
        }
    }
})
