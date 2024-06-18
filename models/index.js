// Import models.
const Exercise = require("./Exercise");
const Routine = require("./routine");
const Users = require("./users");
const UserRoutine = require("./userRoutine");

// Users have many Routine.
Users.belongsToMany(Routine, {
    through: UserRoutine,
});

// Routine belongs to Users.
Routine.belongsTo(Users, {
    through: UserRoutine,
});

Users.hasMany(UserRoutine);

UserRoutine.belongsTo(Users);

Routine.hasMany(UserRoutine);

UserRoutine.belongsTo(Routine);

// Exercise belongs to Routine.
Exercise.belongsTo(Routine, {});

// Routine have many Exercise.
Routine.hasMany(Exercise, {});

// Export the models.
module.exports = { Exercise, Routine, Users, UserRoutine };
