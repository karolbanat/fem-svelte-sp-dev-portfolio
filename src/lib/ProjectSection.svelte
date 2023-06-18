<script lang="ts">
	import Link from './Link.svelte';
	import ProjectList from './ProjectList.svelte';
</script>

<section class="section-spacer">
	<header>
		<h2 class="section-heading">Projects</h2>
		<Link label="Contact me" url="#contact" />
	</header>
	<ProjectList />
</section>

<style>
	header {
		--margin-bottom-lower-bound: var(--spacer-rem-500, 2rem);
		--margin-bottom-grow-rate: 7.75vw;
		--margin-bottom-upper-bound: calc(var(--margin-bottom-lower-bound) * 2);

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--spacer-rem-300, 1em);

		margin-block-end: clamp(
			var(--margin-bottom-lower-bound),
			var(--margin-bottom-grow-rate),
			var(--margin-bottom-upper-bound)
		);
	}
</style>
