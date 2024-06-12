// import models
const Exercise = require('./Exercise');
const Routine = require('./routine');
const Users = require('./users');




// relationships
Exercise.belongsTo(WorkoutTemplate, { foreignKey: 'WorkoutTemplate_id' });
WorkoutTemplate.hasMany(Exercise, { foreignKey: 'exercise_id' });

Exercise.belongsToMany(Users, { through: MuscleGroupGoals, foreignKey: 'exercise_id' });
Users.belongsToMany(Exercise, { through: MuscleGroupGoals, foreignKey: 'users_id' });

module.exports = {Exercise, Routine, Users,};