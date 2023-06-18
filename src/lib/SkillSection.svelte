<script lang="ts">
	import SkillList from './SkillList.svelte';
</script>

<section class="section-spacer">
	<h2 class="visually-hidden">My Skills</h2>
	<SkillList />
</section>

<style>
	section {
		padding-block-start: clamp(var(--spacer-rem-500), 1.5rem + 3.75vw, var(--spacer-rem-900));
	}
</style>
