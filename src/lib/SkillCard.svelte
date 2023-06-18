<script lang="ts">
	export let skillName: string;
	export let experienceYears: number;
</script>

<article>
	<h3>{skillName}</h3>
	<p>{experienceYears} {experienceYears === 1 ? 'year' : 'years'} experience</p>
</article>

<style>
	h3 {
		margin-block-end: 0.3em;

		font-size: var(--fz-600);
		font-weight: var(--fw-bold, 700);
		letter-spacing: var(--ls-200);
		line-height: 1.15;
		color: var(--clr-neutral-100);
	}

	p {
		text-transform: capitalize;
	}
</style>
