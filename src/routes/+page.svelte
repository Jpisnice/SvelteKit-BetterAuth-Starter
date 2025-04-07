<script>
	import { authClient } from '../lib/auth-client';
	let { data } = $props();
	$inspect(data);
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-2">
	<h1 class="text-2xl font-bold">Welcome to Sveltkit Betterauth Starter</h1>
	{#if data?.props?.session}
		<div class="flex flex-col items-center">
			<h2>You have signed in, {data.props.session.user.name}</h2>
			<pre>{JSON.stringify(data.props?.session.user, null, 2)}</pre>
			<button
				class="btn preset-filled"
				onclick={async () => {
					await authClient.signOut();
					window.location.href = '/login';
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<button class="btn preset-filled" onclick={() => (window.location.href = '/login')}>
			Go to /login
		</button>
	{/if}
</div>
