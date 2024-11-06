<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms';

	let { data }: { data: PageData } = $props();

	const form = superForm(data.form, {
		dataType: 'json',
		onUpdated({ form }) {
			$formData.workouts = form.data.workouts;
		}
	});

	const { form: formData, enhance, errors, submitting } = form;
</script>

<div class="flex flex-col gap-2">
	<!-- <div class="flex justify-">
		<select name="workouts" id="workouts" class="flex justify-center w-20">
			<option value="w1">Pull</option>
			<option value="w2">Push</option>
			<option value="w3">Legs</option>
		</select>
	</div> -->

	<div class="flex justify-center gap-36 text-sm font-medium leading-6 text-gray-900">
		<label for="name"> Name </label>
		<label for="weight"> Weight </label>
		<label for="reps"> Reps </label>
	</div>

	<form method="POST" class="flex flex-col gap-2" use:enhance>
		{#each $formData.workouts as { }, i}
			<div class="flex justify-center gap-2">
				<label
					for="set"
					class="flex flex-col justify-center gap-2 text-sm font-medium leading-6 text-gray-900"
				>
					Set {i + 1}
				</label>
				<input
					type="text"
					bind:value={$formData.workouts[i].name}
					name="name"
					id={'name' + i}
					class="flex px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
				/>
				<input
					type="number"
					bind:value={$formData.workouts[i].weight}
					name="weight"
					id={'weight' + i}
					class="flex rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
				/>
				<!-- {#if $errors.workouts && $errors.workouts[i] && $errors.workouts[i].weight && $errors.workouts[i].weight}
						<p class="text-red-500 text-sm">{$errors.workouts[i].weight}</p>
					{/if} -->

				<input
					type="number"
					bind:value={$formData.workouts[i].reps}
					name="reps"
					id={'reps' + i}
					class="flex rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
				/>
			</div>
		{/each}
		<div class="flex justify-center gap-2">
			<!-- svelte-ignore event_directive_deprecated -->
			<button
				type="button"
				class="py-3 px-4 text-white bg-green-600 hover:bg-400-700 rounded-md shadow w-20"
				on:click={() =>
					($formData.workouts = [
						...$formData.workouts,
						{
							id: undefined,
							name: '',
							reps: 0,
							weight: 0
						}
					])}
				disabled={$submitting}
			>
				+
			</button>
			<button
				type="submit"
				class="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow w-auto"
				disabled={$submitting}
			>
				{#if $submitting}Submitting!{:else}Submit{/if}
			</button>
		</div>
	</form>
</div>
