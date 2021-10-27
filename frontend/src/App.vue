<template>
	<div id="nav">
		<Content />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Content } from './components'

@Options({
	name: "App",
	watch: {
		$route(to, from): void {
			document.title = `Muuh - ${to.name}`
		}
	},
	components: { Content }
})
export default class App extends Vue {}
</script>


<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		// font-family: sans-serif;
		scroll-behavior: smooth;
	}
</style>
