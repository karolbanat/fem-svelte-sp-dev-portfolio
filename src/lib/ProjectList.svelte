<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '../types';

	export const projects: Project[] = [
		{
			imageSource: {
				small: '/projects/thumbnail-project-1-small.webp',
				large: '/projects/thumbnail-project-1-large.webp',
			},
			name: 'Design portfolio',
			tags: ['HTML', 'CSS'],
		},
		{
			imageSource: {
				small: '/projects/thumbnail-project-2-small.webp',
				large: '/projects/thumbnail-project-2-large.webp',
			},
			name: 'E-learning landing page',
			tags: ['HTML', 'CSS'],
		},
		{
			imageSource: {
				small: '/projects/thumbnail-project-3-small.webp',
				large: '/projects/thumbnail-project-3-large.webp',
			},
			name: 'Todo web app',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: '/projects/thumbnail-project-4-small.webp',
				large: '/projects/thumbnail-project-4-large.webp',
			},
			name: 'Entertainment web app',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: '/projects/thumbnail-project-5-small.webp',
				large: '/projects/thumbnail-project-5-large.webp',
			},
			name: 'Memory game',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: '/projects/thumbnail-project-6-small.webp',
				large: '/projects/thumbnail-project-6-large.webp',
			},
			name: 'Art gallery showcase',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
	];
</script>

<ul>
	{#each projects as project}
		<li>
			<ProjectCard
				name={project.name}
				tags={project.tags}
				imageSmall={project.imageSource.small}
				imageLarge={project.imageSource.large}
			/>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		row-gap: var(--spacer-rem-500, 2em);
	}

	@media only screen and (min-width: 43rem) {
		ul {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 3.75rem;
			column-gap: var(--spacer-rem-300);
		}
	}

	@media only screen and (min-width: 62rem) {
		ul {
			row-gap: var(--spacer-rem-900);
			column-gap: 1.875rem;
		}
	}
</style>
