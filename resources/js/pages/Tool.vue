<template>
    <div>
        <Head title="Chatgpt Tool"/>

        <Heading class="mb-4">ChatGPT Seeder</Heading>

        <form @submit.prevent="submitForm" ref="form" method="post" class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow">

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="content_type">
                            <span>Select Data Type</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <select class="w-full form-control form-input form-input-bordered" id="content_type">
                                <option value="">Select a data type</option>
                                <option value="real">Real Data</option>
                                <option value="dummy">Dummy Data</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="database_table">
                            <span>Select Database Table</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <select class="w-full form-control form-input form-input-bordered" id="database_table"
                                    @change="getColumns($event)">
                                <option value="">Select a table</option>
                                <option v-for="table in this.tables" :value="table.Tables_in_nova4"
                                        :key="table.Tables_in_nova4">{{ table.Tables_in_nova4 }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="number_of_records">
                            <span>Number of Records</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <input type="text" class="w-full form-control form-input form-input-bordered"
                                   id="number_of_records">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700" id="available_columns" ref="columns"
                     v-if="this.columns.length > 0">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="table">
                            <span>Available Columns:</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-2 md:px-2 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <div class="container mx-auto">
                                <table class="table-auto md:w-1/3">
                                    <thead>
                                    <tr class="text-xs">
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Name
                                        </th>
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Type
                                        </th>
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Length
                                        </th>
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Nullable
                                        </th>
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Default
                                        </th>
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Description
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-center">
                                    <tr v-for="(column, index) in this.columns" :key="index"
                                        class="hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_name }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_type }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_length }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_nullable }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_default }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            <div class="md:mt-0 pb-2 w-full md:py-2">
                                                <div class="space-y-1">
                                                    <input :id="'comment'+index" type="text"
                                                           class="form-control form-input form-input-bordered">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!--                <div v-show="!this.columns">No columns found in this table.</div>-->
            </div>
            <div
                class="flex flex-col md:flex-row md:items-center justify-center md:justify space-y-2 md:space-y-0 space-x-3">
                <button type="button"
                        class="appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 appearance-none bg-transparent font-bold text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800"
                @click="cancel()">
                    Clear
                </button>
                <button type="button"
                        class="shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900">
                    <span class="">Generate Data</span>
                </button>
            </div>
        </form>

        <!--        <div v-if="formSubmitted" class="text-green-500 font-bold mt-4">-->
        <!--            Form submitted successfully!-->
        <!--        </div>-->
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            tables: [],
            columns: [],
            formSubmitted: false,
        };
    },
    mounted() {
        this.getTables();
    },
    methods: {
        getTables() {
            Nova.request().get('/nova-vendor/chatgpt-seeder/tables', {}).then(({data}) => {
                this.tables = data.tables;
            })
        },
        getColumns(table) {
            if (table.target.value === '') {
                this.columns = [];
            } else {
                Nova.request().get('/nova-vendor/chatgpt-seeder/columns/' + table.target.value, {}).then(({data}) => {
                    this.columns = data.columns
                })
            }

        },
        cancel(){
            this.$refs.form.reset();
            this.columns = [];
        }
    },
}
</script>

<style>
/* Scoped Styles */
</style>
