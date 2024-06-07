// import models
const MuscleGroup = require('./MuscleGroup');
const Cardio = require('./Cardio');
const Goals = require('./Goals');
const WorkoutTime = require('./WorkoutTime');



// relationships
MuscleGroup.belongsTo(WorkoutTime, { foreignKey: 'WorkoutTime_id' });
WorkoutTime.hasMany(MuscleGroup, { foreignKey: 'WorkoutTime_id' });

MuscleGroup.belongsToMany(Goals, { through: MuscleGroupGoals, foreignKey: 'MuscleGroup_id' });
Goals.belongsToMany(MuscleGroup, { through: MuscleGroupGoals, foreignKey: 'Goals_id' });

module.exports = {MuscleGroup, Cardio, Goals, WorkoutTime};