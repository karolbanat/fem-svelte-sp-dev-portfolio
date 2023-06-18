<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '../types';

	import designProtfolioSmallImg from '../assets/projects/thumbnail-project-1-small.webp';
	import designProtfolioLargeImg from '../assets/projects/thumbnail-project-1-small.webp';
	import ELearningSmallImg from '../assets/projects/thumbnail-project-2-small.webp';
	import ELearningLargeImg from '../assets/projects/thumbnail-project-2-small.webp';
	import TodoAppSmallImg from '../assets/projects/thumbnail-project-3-small.webp';
	import TodoAppLargeImg from '../assets/projects/thumbnail-project-3-small.webp';
	import EntertainmentAppSmallImg from '../assets/projects/thumbnail-project-4-small.webp';
	import EntertainmentAppLargeImg from '../assets/projects/thumbnail-project-4-small.webp';
	import MemoryGameSmallImg from '../assets/projects/thumbnail-project-5-small.webp';
	import MemoryGameLargeImg from '../assets/projects/thumbnail-project-5-small.webp';
	import ArtGallerySmallImg from '../assets/projects/thumbnail-project-6-small.webp';
	import ArtGalleryLargeImg from '../assets/projects/thumbnail-project-6-small.webp';

	export const projects: Project[] = [
		{
			imageSource: {
				small: designProtfolioSmallImg,
				large: designProtfolioLargeImg,
			},
			name: 'Design portfolio',
			tags: ['HTML', 'CSS'],
		},
		{
			imageSource: {
				small: ELearningSmallImg,
				large: ELearningLargeImg,
			},
			name: 'E-learning landing page',
			tags: ['HTML', 'CSS'],
		},
		{
			imageSource: {
				small: TodoAppSmallImg,
				large: TodoAppLargeImg,
			},
			name: 'Todo web app',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: EntertainmentAppSmallImg,
				large: EntertainmentAppLargeImg,
			},
			name: 'Entertainment web app',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: MemoryGameSmallImg,
				large: MemoryGameLargeImg,
			},
			name: 'Memory game',
			tags: ['HTML', 'CSS', 'Javascript'],
		},
		{
			imageSource: {
				small: ArtGallerySmallImg,
				large: ArtGalleryLargeImg,
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
