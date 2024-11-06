<script lang="ts">
	import type { ExerciseStat } from '$lib/server/database';
	
	export let form;
	export let exerciseStats: ExerciseStat[];

	const increaseRows = () => (exerciseStats = [...exerciseStats, {}]);

	// const onSubmit = async (event: Event) => {
	// 	const formEl = event.target as HTMLFormElement;
	// 	// const data = new FormData(formEl);

	// 	const response = await fetch(formEl.action, {
	// 		method: 'POST',
	// 		body: JSON.stringify({ exerciseStats })
	// 	});
	// };
</script>


