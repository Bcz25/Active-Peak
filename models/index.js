// import models
const MuscleGroup = require('./MuscleGroup');
const Routine = require('./routine');
const Users = require('./users');
const WorkoutTime = require('./WorkoutTime');



// relationships
MuscleGroup.belongsTo(WorkoutTime, { foreignKey: 'workoutTime_id' });
WorkoutTime.hasMany(MuscleGroup, { foreignKey: 'workoutTime_id' });

MuscleGroup.belongsToMany(Users, { through: MuscleGroupGoals, foreignKey: 'muscleGroup_id' });
Users.belongsToMany(MuscleGroup, { through: MuscleGroupGoals, foreignKey: 'users_id' });

module.exports = {MuscleGroup, Routine, Users, WorkoutTime};