import type { Actions, PageServerLoad } from './$types';
import { superValidate, fail } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { WorkoutSchema } from './WorkoutSchema';
import db from '../../lib/server/database';

export type Data = {
	success: boolean;
	errors: Record<string, string>;
};

export const load: PageServerLoad = async () => {
	const exerciseStats = db.getExerciseStats();

	const form = await superValidate({ workouts: exerciseStats }, zod(WorkoutSchema));

	return {
		form
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(WorkoutSchema));

		if (!form.valid) return fail(400, { form });

		db.addExerciseStats(form.data.workouts.filter((x) => x.id == undefined));

		return {
			form,
			success: true
		};
	}
};
