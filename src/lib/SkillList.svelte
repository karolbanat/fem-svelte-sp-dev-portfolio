<script lang="ts">
	import SkillCard from './SkillCard.svelte';
	import type { Skill } from '../types';

	export const skills: Skill[] = [
		{ name: 'HTML', experienceYears: 4 },
		{ name: 'CSS', experienceYears: 4 },
		{ name: 'Javascript', experienceYears: 4 },
		{ name: 'Accessibility', experienceYears: 4 },
		{ name: 'React', experienceYears: 3 },
		{ name: 'Sass', experienceYears: 3 },
	];
</script>

<ul class="text-center-md">
	{#each skills as skill}
		<li>
			<SkillCard skillName={skill.name} experienceYears={skill.experienceYears} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		gap: var(--spacer-rem-300);
	}

	@media only screen and (min-width: 36em) {
		ul {
			grid-template-columns: repeat(auto-fit, minmax(21.5625rem, 1fr));
			row-gap: var(--spacer-rem-700);
			column-gap: var(--spacer-rem-100);
		}
	}

	@media only screen and (min-width: 62em) {
		ul {
			column-gap: 1.875rem;
		}
	}
</style>
