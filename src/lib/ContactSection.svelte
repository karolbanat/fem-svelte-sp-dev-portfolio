<script lang="ts">
	import ContactForm from './ContactForm.svelte';
</script>

<section id="contact">
	<header class="text-center-lg">
		<h2 class="section-heading">Contact</h2>
		<p>
			I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as
			soon as possible.
		</p>
	</header>
	<div>
		<ContactForm />
	</div>
</section>

<style>
	section {
		position: relative;
		isolation: isolate;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacer-rem-500);

		padding-block-start: clamp(3.75rem, 7vw, 5.25rem);
		padding-block-end: 5.75rem;
	}

	section::after {
		content: '';
		position: absolute;
		z-index: -10;
		left: -343px;
		bottom: 97px;

		width: 530px;
		height: 129px;

		background-image: url('../assets/images/patterns/pattern-rings.svg');
	}

	section > * {
		flex: 1;
		width: 100%;
		max-width: 27.8125rem;
	}

	h2 {
		margin-block-end: clamp(1.25rem, 2.5vw, 2.25rem);
	}

	@media only screen and (min-width: 36em) {
		section::after {
			left: -398px;
			bottom: 27px;
		}
	}

	@media only screen and (min-width: 62em) {
		section {
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
		}

		section::after {
			left: -370px;
			bottom: 47px;
		}
	}
</style>
