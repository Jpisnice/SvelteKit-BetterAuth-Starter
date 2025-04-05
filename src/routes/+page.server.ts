import type { PageServerLoad } from './$types';
import { auth } from '../lib/auth';

export const load = (async ({ request }: any) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});
	return {
		props: {
			session
		}
	};
}) satisfies PageServerLoad;
