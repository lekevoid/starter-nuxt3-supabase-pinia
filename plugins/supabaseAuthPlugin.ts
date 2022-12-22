// This plugin was taken from mwohlan's comment on https://github.com/nuxt-modules/supabase/issues/28
export default defineNuxtPlugin((NuxtApp) => {
	const user = useSupabaseUser();
	const route = useRoute();
	// globally watch user and route. If a user and a redirect query param exist:

	watchEffect(() => {
		if (user.value) {
			if (route.query.redirect) {
				navigateTo({ path: route.query.redirect as string });
			}
		}
	});
});
