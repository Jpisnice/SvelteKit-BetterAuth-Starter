<script lang="ts">
	import '../app.css';
	import LightSwitch from './components/LightSwitch.svelte';

	let { children } = $props();
</script>

<LightSwitch />
{@render children()}
