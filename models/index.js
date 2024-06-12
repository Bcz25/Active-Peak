// import models
const Exercise = require("./Exercise");
const Routine = require("./Routine");
const Users = require("./Users");
const Template = require("./Template");

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

// Routine belongsTo Users
Routine.belongsTo(Users, {
  foreignKey: "user_id",
});

// Routine have many Exercise
Routine.hasMany(Exercise, {
  foreignKey: "Routine_id",
});

module.exports = { Exercise, Routine, Users, Template };
