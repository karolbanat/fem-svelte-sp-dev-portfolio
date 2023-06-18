<script lang="ts">
	const EMAIL_REGEX =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let name: string = '';
	let email: string = '';
	let message: string = '';

	let isValidName: boolean = true;
	let isValidEmail: boolean = true;
	let isValidMessage: boolean = true;

	let invalidEmailMessage: string = '';

	function onFormSubmit() {
		if (isValidName && isValidEmail && isValidMessage) resetInputValues();
	}

	function validateName(): void {
		isValidName = !isBlank(name);
	}

	function validateEmail(): void {
		if (isBlank(email)) {
			invalidEmailMessage = 'This field cannot be empty.';
			isValidEmail = false;
			return;
		}

		if (!isValidEmailFormat(email)) {
			invalidEmailMessage = 'Sorry, invalid format here.';
			isValidEmail = false;
			return;
		}

		isValidEmail = true;
	}

	function validateMessage(): void {
		isValidMessage = !isBlank(message);
	}

	function isValidEmailFormat(value: string): boolean {
		return EMAIL_REGEX.test(value);
	}

	function isBlank(value: string): boolean {
		return value === '';
	}

	function resetInputValues(): void {
		name = '';
		email = '';
		message = '';

		isValidName = true;
		isValidEmail = true;
		isValidMessage = true;
	}
</script>

<form on:submit|preventDefault={onFormSubmit}>
	<div class="form-group">
		<label for="name" class:moved={!!name}>Name</label>
		<input
			type="text"
			name="name"
			id="name"
			required
			class:error={!isValidName}
			class:success={name && isValidName}
			bind:value={name}
			on:focusout={validateName}
			on:focusin={() => {
				isValidName = true;
			}}
		/>
		{#if !isValidName}
			<p role="alert" class="error-msg">This field cannot be empty.</p>
		{/if}
	</div>

	<div class="form-group">
		<label for="email" class:moved={!!email}>Email</label>
		<input
			type="email"
			name="email"
			id="email"
			required
			class:error={!isValidEmail}
			class:success={email && isValidEmail}
			bind:value={email}
			on:focusout={validateEmail}
			on:focusin={() => (isValidEmail = true)}
		/>
		{#if !isValidEmail}
			<p role="alert" class="error-msg">{invalidEmailMessage}</p>
		{/if}
	</div>

	<div class="form-group">
		<label for="message" class:moved={!!message}>Message</label>
		<textarea
			name="message"
			id="message"
			required
			class:error={!isValidMessage}
			class:success={message && isValidMessage}
			bind:value={message}
			on:focusout={validateMessage}
			on:focusin={() => {
				isValidMessage = true;
			}}
		/>
		{#if !isValidMessage}
			<p role="alert" class="error-msg">This field cannot be empty.</p>
		{/if}
	</div>

	<button type="submit" class="link">Send message</button>
</form>

<style>
	.form-group {
		position: relative;
		width: 100%;
	}

	.error-msg {
		position: absolute;
		right: 0;
		top: calc(100% + 5px);

		font-size: 0.75rem;
		font-weight: var(--fw-regular);
		color: var(--clr-error);
	}

	form {
		--padding-inline: var(--spacer-rem-300);

		display: flex;
		flex-direction: column;
		gap: var(--spacer-rem-400, 1.5em);

		color: var(--clr-neutral-100);
	}

	label {
		--transition-duration: 350ms;
		--transition-easing: ease-in-out;

		position: absolute;
		left: var(--padding-inline);

		text-transform: uppercase;
		opacity: 0.5;

		transition: left var(--transition-duration) var(--transition-easing),
			transform var(--transition-duration) var(--transition-easing),
			font-size var(--transition-duration) var(--transition-easing);
		cursor: pointer;
	}

	.form-group:focus-within > label,
	label.moved {
		left: calc(var(--padding-inline) / 2);
		transform: translateY(-100%);
		font-size: 75%;
	}

	input,
	textarea {
		width: 100%;
		max-width: 100%;

		padding-inline: var(--padding-inline);
		padding-block-end: var(--spacer-em-400);

		color: inherit;

		background: none;
		border: none;
		border-block-end: 1px solid var(--clr-neutral-100, #fff);
	}

	textarea {
		display: block;
		min-height: 6.625rem;
		resize: vertical;
	}

	:is(input, textarea).error {
		border-block-end: 1px solid var(--clr-error, #fff);

		background-image: url('../assets/images/icons/icon-error.svg');
		background-repeat: no-repeat;
		background-position: 100% 0;
	}

	:is(input, textarea).success {
		border-block-end: 1px solid var(--clr-accent-400, #fff);
	}

	button[type='submit'] {
		align-self: flex-end;
	}
</style>
