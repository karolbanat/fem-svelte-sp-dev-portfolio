<script lang="ts">
	import Link from './Link.svelte';

	export let name: string;
	export let imageSmall: string;
	export let imageLarge: string;
	export let tags: string[] = [];
	export let liveLink: string = '/';
	export let codeLink: string = '/';
</script>

<article>
	<div class="parent">
		<picture>
			<source media="(min-width: 576px)" srcset={imageLarge} />
			<img src={imageSmall} alt="" />
		</picture>
		<div class="links-layer">
			<Link label="View project" url={liveLink} />
			<Link label="View code" url={codeLink} />
		</div>
	</div>
	<h3>{name}</h3>
	<ul>
		{#each tags as tag}
			<li>{tag}</li>
		{/each}
	</ul>
	<footer>
		<Link label="View project" url={liveLink} />
		<Link label="View code" url={codeLink} />
	</footer>
</article>

<style>
	article {
		text-transform: uppercase;
	}

	h3 {
		margin-block-start: 1.25rem;
		margin-block-end: var(--spacer-rem-100, 0.5em);

		font-size: var(--fz-500);
		font-weight: var(--fw-bold, 700);
		line-height: 1.33;
		color: var(--clr-neutral-100);
	}

	ul,
	footer {
		display: flex;
		align-items: center;
		gap: 1.125rem;
	}

	footer {
		gap: 1.875rem;

		margin-block-start: 1.25rem;
	}

	.links-layer {
		display: none;
	}

	@media only screen and (min-width: 62em) {
		.links-layer {
			position: absolute;
			inset: 0;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: var(--spacer-rem-600, 2rem);

			background-color: hsl(0 0% 0% / 0.75);
			opacity: 0;
			transition: opacity 350ms ease-in-out;
		}

		.links-layer:is(:hover, :focus-within) {
			opacity: 1;
			cursor: pointer;
		}

		footer {
			display: none;
		}
	}
</style>
