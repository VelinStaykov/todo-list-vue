export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

export const filtersModule = {
    state: {
        filter: StatusFilters.All 
      },
      mutations: {
        updateFilter(state, filter) {
            state.filter = filter;
        }
      },
      actions: {
        updateFilter({commit}, filter) {
            commit("updateFilter", filter)
        }
      }
}