<template>
    <div>
        <footer>
            <ul v-for="filter in renderedFilters" :key="filter.value" >
                <li>
                    <button v-on:click="updateStatus(filter.value)">
                        {{ filter.name }}
                    </button>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import { StatusFilters } from '../Store/filtersModule';

    export default {
        name: 'TodoFilters',
        data: () => {
            return {
                renderedFilters: this.renderedFilters
            }
        },
        computed: mapState({
            status: state => state.filter.filter.status
        }),
        methods: {
            ...mapActions([
                'updateStatus'
            ]),
            statusFilter: () => {
                return this.renderedFilters = Object.keys(StatusFilters).map((key) => {
                    const name = key;
                    const value = StatusFilters[key];

                    return {
                        name: name,
                        value: value
                    }
                })
            }
        },
        mounted: function () {
            this.statusFilter()
        }
    }
</script>

<style lang="scss" scoped>

</style>