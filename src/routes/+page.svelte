<script>
    import {authClient} from "../lib/auth-client";
    let {data} = $props();
    $inspect(data)
</script>

<div class="flex flex-col m-4 p-2 justify-around items-center">
    <h1 class="font-bold text-2xl">Welcome to Sveltkit Betterauth Starter</h1>
    {#if data?.props?.session}

        <div class="flex flex-col m-4">
            <h2>You have signed in, {data.props.session.user.name}</h2>
            <p class="my-2">
                Account: {JSON.stringify(data.props?.session.user, null, 2)}
            </p>
            <button
                class="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                onclick={async () => {
                    await authClient.signOut();
                    window.location.href = '/login';
                }}
            >
                Sign Out
            </button>
        </div>
    {:else}
        <button
            class="flex m-4 items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            onclick={() => window.location.href = '/login'}
        >
            Go to /login
        </button>
    {/if}
</div>
