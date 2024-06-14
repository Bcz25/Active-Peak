DROP DATABASE IF EXISTS exercise_db;
CREATE DATABASE exercise_db;

\c exercise_db;

CREATE TABLE exercises (
    id INTEGER NOT NULL,
    exercise_name VARCHAR(30) NOT NULL,
    exercise_description VARCHAR NOT NULL,
    reps VARCHAR(30) NOT NULL
);

INSERT INTO exercise_db (id, exercise_name, exercise_description, reps)
VALUES (001, 'Assisted Bodyweight Squat', '', '10'),
       (002, 'Elevated or Knee Push-up', '', '10'),
       (003, 'Dumbell Rows', '', '10 per side'),
       (004, 'Knee Planks', '', '15-30 seconds'),
       (005, 'Bodyweight Good Morning', '', '10'),
       (006, 'Walking Jacks', '', '10 per side'),

       (007, 'Bodyweight Squat', '', '20'),
       (008, 'Push-ups', '', '10'),
       (009, 'Walking Lunges', '', '10 per leg'),
       (010, 'Dumbell Rows', '', '10 per side'),
       (011, 'Plank', '', '30 seconds'),
       (012, 'Jumping Jacks', '', '30'),

       (013, 'One-legged Squats', '', '10 per side'),
       (014, 'Bodyweight Squats', '', '20'),
       (015, 'Walking lunges', '', '10 per leg'),
       (016, 'Jump Step-ups', '', '10 per leg'),
       (017, 'Pull-ups or Inverted Bodyweight Rows', '', '10'),
       (018, 'Dips','', '10'),
       (019, 'Chin-ups or Inverted Bodyweight Rows', '', '10'),
       (020, 'Push-ups', '', '10'),
       (021, 'Plank', '', '30 seconds'),

       (022, 'Wide Grip Pull-ups', '', '8'),
       (023, 'Barbell Push Press', '', '8'),
       (024, 'Walking Lunge', '', '8 per leg'),

       (025, 'Dumbell Rows', '', '8 per side'),
       (026, 'Dumbell Bench', '', '8'),
       (027, 'Sumo Deadlift', '', '8'),
       (028, 'Hanging Leg Raise', '', '8'),

       (029, 'Lat Pull Down', '', '12'),
       (030, 'Dumbell Standing Shoulder Press', '', '12'),
       (031, 'Skater Jumps', '', '12 per leg'),

       (032, 'Barbell Bent Over Row', '', '12'),
       (033, 'Squeeze Row', '', '12'),
       (034, 'Romanian Deadlift', '', '12'),
       (035, 'Bodysaw Plank', '', '12'),

       (036, 'Chin-ups', '', '8'),
       (037, 'Standing Barbell Lateral Raise', '', '8'),
       (038, 'Squat Jumps', '', '8'),

       (039, 'Dumbell Pullover', '', '8'),
       (040, 'Dumbell Incline Bench Press', '', '8'),
       (041, 'Dumbell Split Squat w/ Vertical Shin', '', '8 per leg'),
       (042, 'Lying Leg Drop', '', '8'),

       (043, 'Dumbell Clean to Reverse Lunge', '', '50 seconds'),
       (044, 'Push-up with Twist', '', '50 seconds'),
       (045, 'Side Lunge to Upright Row', '', '50 seconds'),
       (046, 'One Arm Renegade Row', '', '50 seconds'),
       (047, '1 ½ Sumo Deadlift', '', '50 seconds'),
       (048, 'Dumbell Skier Swings', '', '50 seconds'),
       (049, 'Iso Hip Up Dumbell Pullover', '', '50 seconds'),
       (050, 'Plank Dumbbell Transfers', '', '50 seconds'),
       (051, 'Split squat with Single Arm Press', '', '50 seconds'),
       (052, 'One Arm Snatch', '', '50 seconds'),
       (053, 'Crab Curl-To-Press', '', '50 seconds'),
       (054, 'Jump Shrug', '', '50 seconds'),
       (055, 'Hollow Body Chest Press', '', '50 seconds'),
       (056, 'Reaching Lunge', '', '50 seconds'),

       (057, 'Leg Raise and Reverse Crunch', '', '50 seconds'),
       (058, 'Tempo Reach Crunch', '', '50 seconds'),
       (059, 'Side Plank Elbow to Knee Crunch', '', '50 seconds'),
       (060, 'Bear Plank Reach Thru', '', '50 seconds'),
       (061, 'ISO Leg Raise with Arm Scissor', '', '50 seconds'),
       (062, "Lying Leg Figure 8's", '', '50 seconds'),
       (063, 'Plank Kick Throughs', '', '50 seconds'),
       (064, 'Bicycle Crunchs', '', '50 seconds'),
       (065, 'Plank', '', '50 seconds'),

       (066, 'Bench Press', '', '8-12'),
       (067, 'Chess Press', '', '8-12'),
       (068, 'Overhead Raise', '', '8-12'),
       (069, 'Lateral Raise', '', '8-12'),
       (070, 'Bicep Curls', '', '8-12'),
       (071, 'Hammer Curls', '', '8-12'),
       (072, 'Tricpes Extensions', '', '8-12'),
       (073, 'Bar Dips', '', '8-12'),
       (074, 'One Arm Row', '', '8-12'),
       (075, 'Lat Pulldowns', '', '8-12'),
       (076, 'Crunches', '', '20-30'),
       (077, 'Wood Chops', '', '12-18'),
       (078, 'Squats', '', '8-12'),
       (079, 'Lunges', '', '8-12 per leg'),
       (080, 'Deadlifts', '', '8-12'),
       (081, 'Calf Raises', '', '8-12'),

       (082, 'Bench Press', '', '3 sets of 5 reps'),
       (083, 'Barbell Row', '', '3 sets of 5 reps'),
       (084, 'Dumbell Shoulder Press', '', '3 sets of 8 reps'),
       (085, 'Dumbell Row', '', '3 sets of 10 reps'),
       (086, 'Squats', '', '3 sets of 5 reps'),
       (087, 'Power Clean', '', '3 sets of 3 reps'),
       (088, 'Bulgarian Split Squat', '', '3 sets of 10 reps'),
       (089, 'Kneeling Ab Wheel', '', '2 sets of max reps'),

       (090, 'Overhead Press', '', '3 sets of 5 reps'),
       (091, 'Pull-Up', '', '3 sets of 5 reps'),
       (092, 'Close Grip Bench Press', '', '3 sets of 5 reps'),
       (093, 'Barbell Curl', '', '3 sets of 10 reps'),
       (094, 'Deadlift', '', '3 sets of 5 reps'),
       (095, 'Front Squat', '', '3 sets of 5 reps'),
       (096, 'Good Morning', '', '3 sets of 5 reps'),
       (097, 'Hanging Leg Raise', '', '2 sets of max reps');


