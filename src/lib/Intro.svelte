<script lang="ts">
	import Link from './Link.svelte';
</script>

<div class="text-center-sm">
	<h1 class="section-heading">Nice to meet you! I'm <span>Adam Keyes</span>.</h1>
	<p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
	<Link url="#contact" label="Contact me" />
</div>

<style>
	h1 {
		margin-block-end: var(--spacer-em-300);
		color: var(--clr-neutral-100);
	}

	h1 span {
		text-decoration: underline;
		text-decoration-color: var(--clr-accent-400);
		text-decoration-thickness: 6px;
		text-decoration-skip-ink: none;
		text-underline-offset: 6px;
	}

	p {
		margin-block-end: var(--spacer-rem-300);
		max-width: 36ch;
		margin-inline: auto;
	}

	@media only screen and (min-width: 36em) {
		h1 span {
			text-underline-offset: 12px;
		}

		p {
			margin-block-end: var(--spacer-rem-400);
			margin-inline: unset;
		}
	}

	@media only screen and (min-width: 62em) {
		h1 span {
			text-underline-offset: 16px;
		}

		p {
			margin-block-end: var(--spacer-rem-800);
		}
	}
</style>
