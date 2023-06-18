<script lang="ts">
	import imageSrcSmall from '/src/assets/images/image-profile-mobile.webp';
	import imageSrcMedium from '/src/assets/images/image-profile-tablet.webp';
	import imageSrcLarge from '/src/assets/images/image-profile-desktop.webp';
	export let imageAlt: string = 'Adam Keyes';
</script>

<picture>
	<source media="(min-width: 992px)" srcset={imageSrcLarge} />
	<source media="(min-width: 576px)" srcset={imageSrcMedium} />
	<img src={imageSrcSmall} alt={imageAlt} />
</picture>

<style>
	picture {
		position: relative;
	}

	picture::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: calc(var(--spacer-rem-400, 2em) + 100%);

		width: 129px;
		aspect-ratio: 1 / 1;

		background-image: url('../assets/images/patterns/pattern-circle.svg');
	}

	img {
		width: 10.875rem;
		max-width: 27.8125rem;
	}

	@media only screen and (min-width: 36em) {
		picture {
			transform: translateX(var(--spacer-rem-400, 2em));
		}

		picture::after {
			left: 100%;
			transform: translateX(-50%);
		}

		img {
			width: 46vw;
		}
	}

	@media only screen and (min-width: 62em) {
		picture {
			transform: unset;
		}

		picture::after {
			left: 0;
			bottom: 70px;
		}

		img {
			width: 27.8125rem;
		}
	}
</style>
