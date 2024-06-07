// import models
const MuscleGroup = require('./muscleGroup');
const Cardio = require('./cardio');
const Goals = require('./goals');
const WorkoutTime = require('./workoutTime');



// relationships
MuscleGroup.belongsTo(WorkoutTime, { foreignKey: 'workoutTime_id' });
WorkoutTime.hasMany(MuscleGroup, { foreignKey: 'workoutTime_id' });

MuscleGroup.belongsToMany(Goals, { through: MuscleGroupGoals, foreignKey: 'muscleGroup_id' });
Goals.belongsToMany(MuscleGroup, { through: MuscleGroupGoals, foreignKey: 'goals_id' });

module.exports = {MuscleGroup, Cardio, Goals, WorkoutTime};