<template>
  <div class="container mx-auto px-4">
    <div class="grid gap-4 grid-cols-2">
      <div class="box1">
        <h1 class="investmentScore">Hello Joanna!</h1>
      </div>
      <div class="box1">
        <div class="float-right">
          <form class="max-w-md mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search for Investments</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Progress Capital"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <BarChart
          :dataValue="[65, 59, 80, 81, 56, 55, 40]"
          :labelDisplay="true"
          :labelName1="'Pre-Synergy Multiple'"
          :labelName2="'Post-Synergry Multiple'"
        />
      </div>
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <HorizontalBarChart
          :dataValue="[65, 59, 80, 81, 56, 55, 40]"
          :labelDisplay="true"
          :labelName1="'Pre-Synergy Multiple'"
          :labelName2="'Post-Synergry Multiple'"
        />
      </div>
    </div>
    <div class="container-fluid pt-5">
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div style="display: inline-block; width: 100%">
          <div class="investment float-left">My Investments</div>
          <div class="float-right">
            <button
              class="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                class="h-6 w-6 text-white-700"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-base">Add Item</p>
            </button>
          </div>
        </div>

        <div class="relative overflow-x-auto sm:rounded-lg">
          <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Investment Title</th>
                <th scope="col" class="px-6 py-3">Total Consideration</th>
                <th scope="col" class="px-6 py-3">Guaranteed</th>
                <th scope="col" class="px-6 py-3">At-risk</th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-medium text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-medium text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-medium text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Lindsay Walton
                </th>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">10</td>
                <td class="px-6 py-4">
                  <button
                    class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-slate-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path
                        d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                      />
                      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                    </svg>
                    Edit
                  </button>
                  <button
                    class="px-1 py-1 ml-2 text-sm font-medium text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                  >
                    <svg
                      class="h-5 w-5 text-red-700"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path
                        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                      />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  gap: 16px;
}
.box1 {
  flex: 1;
  padding: 16px;
}
.box {
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.edit-button {
  padding-right: 12px;
  display: inline-block;
}
</style>

<script setup>
import '@/assets/styles/global.css';
import BarChart from '~/components/BarChart.vue';
import HorizontalBarChart from '~/components/HorizontalBarChart.vue';

const columns = [{
  key: 'title',
  label: 'Investment Title'
}, {
  key: 'total',
  label: 'Total Consideration'
}, {
  key: 'guaranteed',
  label: 'Guaranteed'
}, {
  key: 'atRisk',
  label: 'At-risk'
}, {
  key: 'actions'
}]

const people = [{
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
   total: '10',
  guaranteed: '10',
  atRisk: '10',
}]

definePageMeta({
    layout: "home",
})
</script>
