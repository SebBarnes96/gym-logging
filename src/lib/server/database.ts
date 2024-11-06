export type ExerciseStat = {
	id?: number;
	name?: string;
	weight?: number;
	reps?: number;
};

let exerciseStats: ExerciseStat[] = [
	{
		id: 1,
		name: 'Squats',
		reps: 8,
		weight: 70
	},
	{
		id: 2,
		name: 'Leg Press',
		reps: 8,
		weight: 60
	}
];

const addExerciseStats = (newExerciseStats: ExerciseStat[]) => {
	let newId =
		exerciseStats
			.filter((x) => x.id != undefined)
			.reduce((prev, curr) => (prev.id! > curr.id! ? prev : curr))?.id ?? 1;

	newExerciseStats.forEach((x, i) => {
		x.id = newId + i + 1;
	});

	exerciseStats = [...exerciseStats, ...newExerciseStats];
};

const getExerciseStats = () => exerciseStats;

export default { addExerciseStats, getExerciseStats };
