import { z } from 'zod';

export const WorkoutSchema = z.object({
	workouts: z.array(
		z.object({
			id: z.number().optional(),
			name: z.string().optional(),
			weight: z.number().min(0).max(500).optional(),
			reps: z.number().min(0).max(100).optional()
		})
	)
});
