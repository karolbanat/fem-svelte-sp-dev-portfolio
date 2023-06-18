<script lang="ts">
</script>

<header>
	<div class="nav-area">
		<slot name="navigation" />
	</div>
	<div class="picture-area">
		<slot name="image" />
	</div>
	<div class="intro-area">
		<slot name="content" />
	</div>
</header>

<style>
	header {
		position: relative;

		display: grid;
		grid-template-rows: auto 1fr;
		gap: var(--spacer-rem-500);

		margin-block-end: 5rem;
	}

	header::after {
		content: '';
		position: absolute;
		z-index: -10;
		left: -342px;
		top: 124px;

		width: 530px;
		height: 129px;

		background-image: url('../assets/images/patterns/pattern-rings.svg');
	}

	.nav-area,
	.picture-area {
		grid-row: 1;
		grid-column: 1;
	}

	.picture-area {
		z-index: -1;
		justify-self: center;
	}

	@media only screen and (min-width: 36em) {
		header {
			margin-block-end: 3.75rem;
		}

		header::after {
			left: -265px;
			top: 86px;
		}

		.nav-area {
			grid-column: 1 / 6;
		}

		.picture-area {
			grid-row: 1 / 3;
			grid-column: 3 / 6;
			justify-self: end;
		}

		.intro-area {
			grid-row: 2 / 3;
			grid-column: 1 / 4;
		}
	}

	@media only screen and (min-width: 62em) {
		header {
			margin-block-end: 6.5rem;
		}

		header::after {
			top: 133px;
		}
	}
</style>
