import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {};
};

export const actions = {
	default: async (event) => {
		// const data = await request.formData();
		console.log(event);

		return { success: true };
	}
} satisfies Actions;
