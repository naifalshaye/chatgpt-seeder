<template>
    <div>
        <Head title="ChatGPT Seeder"/>
        <Heading class="mb-4">ChatGPT Seeder</Heading>

        <form @submit.prevent="submitForm" ref="form" method="post" class="space-y-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="content_type">
                            <span>Data Type</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <select class="w-full form-control form-input form-input-bordered" v-model="form.data_type"
                                    required>
                                <option value="">Select Data Type</option>
                                <option value="real">Real Data</option>
                                <option value="fake">Fake Data</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="database_table">
                            <span>Database Table</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <select v-model="form.database_table"
                                    class="w-full form-control form-input form-input-bordered"
                                    id="database_table"
                                    @change="getColumns($event)" required>
                                <option value="">Select Table</option>
                                <option v-for="table in this.tables" :value="table"
                                        :key="table">{{ table }}
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
                                   v-model="form.number_of_records" required>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5">
                        <label class="inline-block leading-tight space-x-1" for="data_required">
                            <span>Data Description</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>

                    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 md:w-3/5 w-full md:py-5">
                        <div class="space-y-1">
                            <input type="text" class="w-full form-control form-input form-input-bordered"
                                   placeholder="Describe the data you are looking for.."
                                   v-model="form.data_required" required>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700"
                     id="available_columns" ref="columns">
                    <div class="px-6 md:px-8 mt-1 md:mt-1 w-full md:w-1/5 py-6">
                        <label class="inline-block leading-tight space-x-1" for="collumns">
                            <span>Available Columns:</span>
                            <span class="text-red-500 text-sm">*</span>
                        </label>
                    </div>
                    <div class="mt-2 pb-5 px-2 md:px-2 md:w-3/5 w-full md:py-5 flex justify-center">
                        <div class="space-y-1" v-if="this.columns.length > 0">
                            <div class="container mx-auto">
                                <table class="table-auto md:w-1/3">
                                    <thead>
                                    <tr class="text-xs">
                                        <th class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3">
                                            Select
                                        </th>
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
                                    </tr>
                                    </thead>
                                    <tbody class="text-center">
                                    <tr v-for="(column, index) in this.columns" :key="index"
                                        class="hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            <input v-if="!column.column_not_nullable" type="checkbox"
                                                   class="w-4 form-control form-input-bordered"
                                                   :value="column.column_name"
                                                   v-model="form.selected_columns">

                                            <input v-if="column.column_not_nullable" type="checkbox"
                                                   class="w-4 form-control form-input-bordered"
                                                   :checked="column.column_not_nullable"
                                                   :disabled="true">
                                        </td>
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
                                            {{ !column.column_not_nullable }}
                                        </td>
                                        <td class="border border-gray-100 dark:border-gray-700 px-4 py-1">
                                            {{ column.column_default }}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div v-if="this.form.database_table !== '' && this.columns.length === 0"
                             class="text-red-500 font-bold mt-4 flex justify-center text-center">
                            This table has no columns.
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isLoading" class="mt-4 flex justify-center">
                <img src="/vendor/chatgpt-seeder/images/loading-spinner.gif" alt="Loading" width="46"
                     class="flex justify-center bg-opacity-80 z-50"/>
            </div>
            <div v-if="this.message" class="text-green-500 font-bold mt-4 flex justify-center capitalize">
                {{ this.message }}
            </div>
            <div v-if="this.error" class="text-red-500 font-bold mt-4 flex justify-center text-center">
                {{ this.error }}
            </div>
            <div
                class="flex flex-col md:flex-row md:items-center justify-center md:justify space-y-2 md:space-y-0 space-x-3">
                <button type="button"
                        class="bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        @click="clearForm">
                    Clear
                </button>
                <button type="submit"
                        class="shadow relative bg-primary-500 hover:bg-primary-900 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900">
                    <span class="">Generate Data</span>
                </button>
            </div>
        </form>
    </div>
    <div v-if="showModal" class="modal fixed inset-0 flex items-center justify-center z-40"
         @click="handleOutsideClick">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <diver
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full mx-4 overflow-y-auto border border-gray-200 dark:border-gray-600">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <h2 class="text-md font-bold">Preview Data</h2>
                <button @click="closeModal"
                        class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="px-6 py-4">
                <div class="flex justify-center overflow-x max-h-[calc(100vh-5em)]">
                    <table class="table-auto overflow-scroll min-w-[20rem]">
                        <thead>
                        <tr>
                            <th v-for="key in this.keys" :key="key"
                                class="border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-2 capitalize">
                                {{ key }}
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in this.sample_data" :key="item"
                            class="hover:bg-gray-400 dark:hover:bg-gray-700">
                            <td v-for="key in this.keys" :key="key"
                                class="border border-gray-200 dark:border-gray-600 px-4 py-1 text-center">
                                <template v-if="typeof item[key] === 'object'">
                                    <span v-for="(value, subKey) in item[key]" :key="subKey">
                                      {{ subKey }}: {{ value }}
                                    </span>
                                </template>
                                <template v-else>
                                    {{ item[key] }}
                                </template>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-center mb-4 mt-2">
                    Total Tokens Used: {{ this.usage.total_tokens }}
                </div>
                <div class="flex justify-center mt-8">
                    <button class="px-4 py-2 bg-green-500 text-white rounded-md mr-2 rounded" @click="proceed">Proceed
                    </button>
                    <button
                        class="bg-primary-500 text-white font-bold py-2 px-4 border-b-4 border-primary-500 hover:border-blue-500 rounded mr-2"
                        @click="reGenerate">
                        Regenerate
                    </button>
                    <button class="px-4 py-2 bg-red-500 text-white rounded-md rounded" @click="closeModal">Close
                    </button>
                </div>
            </div>
        </diver>
    </div>

</template>

<script>
export default {
    data() {
        return {
            tables: [],
            columns: [],
            form: {
                data_type: '',
                database_table: '',
                number_of_records: '',
                selected_columns: [],
                seed_data: []
            },
            usage: null,
            keys: [],
            sample_data: [],
            generate_retry: 3,
            retry_count: 0,
            showModal: false,
            isLoading: false,
            message: '',
            error: '',
        };
    },
    mounted() {
        this.getTables();
        this.getGenerateRetry();
    },
    methods: {
        getGenerateRetry() {
            try {
                Nova.request().get('/nova-vendor/chatgpt-seeder/chatgpt-seeder/get-generate-retry', {}).then(({data}) => {
                    this.generate_retry = data.generate_retry;
                })
            } catch (e) {
                this.error = e.message;
            }
        },
        getTables() {
            try {
                Nova.request().get('/nova-vendor/chatgpt-seeder/chatgpt-seeder/tables', {}).then(({data}) => {
                    this.tables = data.tables;
                })
            } catch (e) {
                this.error = e.message;
            }
        },
        getColumns(table) {
            try {
                this.clearError();
                this.columns = [];
                this.form.selected_columns = [];
                this.database_table = table.target.value;
                Nova.request().get('/nova-vendor/chatgpt-seeder/chatgpt-seeder/columns/' + table.target.value, {}).then(({data}) => {
                    if (data.exception) {
                        this.isLoading = false;
                        this.error = data.exception_message;
                    } else {
                        this.columns = data.columns
                    }
                })
            } catch (e) {
                this.error = e.message;
            }
        },
        submitForm() {
            this.clearError();
            this.resetRetry();
            this.generate();
        },
        generate() {
            try {
                this.clearError();
                this.message = ''
                this.isLoading = true;
                if (this.retry_count <= this.generate_retry) {
                    this.form.columns = this.columns;
                    Nova.request().post('/nova-vendor/chatgpt-seeder/chatgpt-seeder/generate', this.form)
                        .then(({data}) => {
                            if (data.api_response_error) {
                                this.isLoading = false;
                                this.error = data.api_response_error
                            } else if (data.exception) {
                                this.isLoading = false;
                                this.error = data.exception_message;
                            } else {
                                this.usage = data.usage;
                                if (data.data) {
                                    this.content = data.data;
                                    data = data.data.slice(0, 8);
                                    if (data.length > 1) {
                                        this.sample_data = data;
                                        this.keys = Object.keys(data[0]);
                                        this.isLoading = false;
                                        this.openModal();
                                    } else {
                                        this.retry_count++;
                                        this.generate();
                                    }
                                } else {
                                    this.retry_count++;
                                    this.generate();
                                }
                            }
                        })
                } else {
                    this.isLoading = false;
                    this.error = 'Retry limit exceeded! Please refine your data description for more accurate results!'
                }
            } catch (e) {
                this.error = e.message;
            }
        },
        proceed() {
            try {
                this.clearError();
                this.form.seed_data = this.content
                Nova.request().post('/nova-vendor/chatgpt-seeder/chatgpt-seeder/proceed', this.form)
                    .then(({data}) => {
                        if (data.exception) {
                            this.isLoading = false;
                            this.error = data.exception_message;
                        } else {
                            if (data.succeed) {
                                this.isLoading = false;
                                this.message = this.form.database_table + ' table seeded successfully!'
                            } else {
                                this.isLoading = false;
                                this.message = 'Data return is invalid!'
                            }
                        }
                    })
            } catch (e) {
                this.error = e.message;
            }
        },
        reGenerate() {
            this.resetRetry();
            this.submitForm();
        },
        resetRetry() {
            this.retry_count = 0;
        },
        clearForm() {
            this.columns = [];
            this.selected_columns = [];
            this.form.data_type = null;
            this.form.database_table = null;
            this.form.number_of_records = null;
            this.form.data_required = null;
            this.form.seed_data = [];
            this.keys = [];
            this.sample_data = [];
            this.resetRetry();
            this.clearError();
            this.message = '';
            this.isLoading = false;
        },
        clearError() {
            this.error = '';
        },
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.message = ''
        },
        handleOutsideClick() {
            this.closeModal();
        },
    },
}
</script>

<style>

</style>
