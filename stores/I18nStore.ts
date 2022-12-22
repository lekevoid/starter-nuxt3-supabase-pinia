// stores/I18nStore.ts
// no need to import defineStore and acceptHMRUpdate
export const useI18nStore = defineStore("I18nStore", {});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useI18nStore, import.meta.hot));
}
