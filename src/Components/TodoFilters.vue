<template>
    <div>
        <footer class="filters">
            <ul 
                class="filters statusFilters"
                v-for="filter in renderedFilters" :key="filter.value" 
                v-bind="filter"
            >
                <li>
                    <button 
                        v-bind:class="{selected: isSelected(filter.value)}"
                        v-on:click="updateFilter(filter.value)"
                    >
                        {{ filter.name }}
                    </button>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import { StatusFilters } from '../Store/Modules/filtersModule';

    export default {
        name: 'TodoFilters',
        data: () => {
            return {
                renderedFilters: []
            }
        },
        computed: mapState({
            filter: state => state.filter.filter
        }),
        methods: {
            ...mapActions([
                'updateFilter'
            ]),
            isSelected: function(filter) {
                return filter === this.filter
            },
            setFilters: function() {
                this.renderedFilters = Object.keys(StatusFilters).map((key) => {
                    const name = key;
                    const value = StatusFilters[key];

                    return {
                        name: name,
                        value: value,
                    }
                })
            }
        },
        mounted: function () {
            this.setFilters()
        }
    }
</script>

<style scoped>
    .filters {
        text-align: center;
    }

    .filters ul {
        margin: 0;
        padding: 0;
        text-align: center;
        list-style: none;
    }

    .filters.statusFilters li button {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 2px solid transparent;
        border-radius: 3px;
        cursor: pointer;
        background: unset !important;
    }

    .filters.statusFilters li button:hover {
        border-color: rgba(78, 181, 241, 0.356);
    }

    .filters.statusFilters li button.selected {
        border-color: rgb(78, 181, 241);
    }

    .filters.statusFilters li button:focus {
        outline: 0;
    }

</style>