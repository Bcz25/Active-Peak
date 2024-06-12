// import models
<<<<<<< HEAD
const Exercise = require('./Exercise');
const Routine = require('./routine');
const Users = require('./users');

=======
const Exercise = require("./Exercise");
const Routine = require("./Routine");
const Users = require("./Users");
const Template = require("./Template");
>>>>>>> 077726c1e35ccedb8a4dd07d1ab101d06b48cf51

// Exercise belongsTo Users
Exercise.belongsTo(Users, {
  foreignKey: "user_id",
});

// Exercise belongsTo Routine
Exercise.belongsTo(Routine, {
  foreignKey: "Routine_id",
});

// Users have many Exercise
Users.hasMany(Exercise, {
  foreignKey: "user_id",
});

// Users have many Routine
Users.hasMany(Routine, {
  foreignKey: "user_id",
});

<<<<<<< HEAD
module.exports = {Exercise, Routine, Users,};
=======
// Routine belongsTo Users
Routine.belongsTo(Users, {
  foreignKey: "user_id",
});

// Routine have many Exercise
Routine.hasMany(Exercise, {
  foreignKey: "Routine_id",
});

module.exports = { Exercise, Routine, Users, Template };
