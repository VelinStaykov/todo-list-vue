export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

export const filtersModule = {
    state: {
        filter: { status: StatusFilters.All }
      },
      mutations: {
        updateFilter(status) {
            this.state.filter.status = status;
        }
      },
      actions: {
        updateFilter({commit}, status) {
            commit("updateFilter", status)
        }
      }
}