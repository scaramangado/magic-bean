import { defineStore } from "pinia";

export interface FilterState {
  filterString: string;
};

export const useStore = defineStore("filter", {

  state: () => ({
    filterString: "",
  } as FilterState),

  actions: {
    setFilter(newFilter: string) {
      this.filterString = newFilter;
    },

    clearFilter() {
      this.filterString = "";
    },
  },
});
