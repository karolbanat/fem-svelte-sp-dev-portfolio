<script lang="ts">
	import ContactSection from './lib/ContactSection.svelte';
	import Header from './lib/Header.svelte';
	import Intro from './lib/Intro.svelte';
	import LinedContainer from './lib/LinedContainer.svelte';
	import Navigation from './lib/Navigation.svelte';
	import PageFooter from './lib/PageFooter.svelte';
	import ProfilePicture from './lib/ProfilePicture.svelte';
	import ProjectSection from './lib/ProjectSection.svelte';
	import SkillSection from './lib/SkillSection.svelte';
	import Wrapper from './lib/Wrapper.svelte';
</script>

<Wrapper>
	<Header>
		<Navigation slot="navigation" />
		<ProfilePicture slot="image" />
		<Intro slot="content" />
	</Header>
</Wrapper>

<main>
	<Wrapper>
		<LinedContainer>
			<SkillSection />
		</LinedContainer>
	</Wrapper>
	<Wrapper>
		<ProjectSection />
	</Wrapper>
	<div class="bg-neutral-600">
		<Wrapper>
			<ContactSection />
		</Wrapper>
	</div>
	<div class="bg-neutral-600">
		<Wrapper>
			<LinedContainer>
				<PageFooter />
			</LinedContainer>
		</Wrapper>
	</div>
</main>

<style>
</style>
