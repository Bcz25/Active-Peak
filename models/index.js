// Import models.
const Exercise = require("./Exercise");
const Routine = require("./routine");
const Users = require("./users");

// Users have many Routine.
Users.hasMany(Routine, {});

// Routine belongs to Users.
Routine.belongsTo(Users, {});

// Routine have many Exercise.
Routine.hasMany(Exercise, {});

// Exercise belongs to Routine.
Exercise.belongsTo(Routine, {});

// Export the models.
module.exports = { Exercise, Routine, Users };
