<script lang="ts">
	import Navigation from './Navigation.svelte';
</script>

<footer>
	<Navigation label="footer" />
</footer>

<style>
	footer {
		padding-block-start: calc(var(--spacer-rem-500) / 2);
		padding-block-end: var(--spacer-rem-500);
	}

	@media only screen and (min-width: 48em) {
		footer {
			padding-block-start: var(--spacer-rem-100);
			padding-block-end: var(--spacer-rem-100);
		}
	}

	@media only screen and (min-width: 62em) {
		footer {
			padding-block-end: var(--spacer-rem-600);
		}
	}
</style>
