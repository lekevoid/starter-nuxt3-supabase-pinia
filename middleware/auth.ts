// This middleware was taken from mwohlan's comment on https://github.com/nuxt-modules/supabase/issues/28
export default defineNuxtRouteMiddleware((to) => {
	const user = useSupabaseUser();

	if (!user.value) {
		//reroute to login saving the current destination in the redirect query param
		return navigateTo({ name: "login", query: { redirect: to.path } });
	}
});
