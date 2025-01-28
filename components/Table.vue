<template>
  <!-- ====== Table Section Start -->
  <section class="bg-white dark:bg-dark">
    <div class="mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="max-w-full overflow-x-auto">

            <table class="w-full table-auto">
              <thead>
                <tr class="text-center bg-primary">
                  <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)"
                    class="border-l border-transparent py-4 px-3 text-lg font-medium text-black lg:py-7 lg:px-4">
                    {{ column.label }}
                    <span v-if="sortColumn === column.key">
                      {{ sortDirection === "asc" ? "\u2191" : "\u2193" }}
                    </span>
                  </th>
                  <th v-if="$slots.action"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in paginatedData" :key="item.id">
                  <td v-for="column in columns" :key="column.key">
                    <slot :name="`column-${column.key}`" :item="item" :value="item[column.key]">
                      {{ item[column.key] }}
                    </slot>
                  </td>
                  <td v-if="$slots.action">
                    <slot name="action" :item="item"></slot>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination Controls -->
            <div class="pagination" v-if="showPagination">
              <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
              <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                :class="{ 'active': page === currentPage }">
                {{ page }}
              </button>
              <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>

              <div v-if="showPagination">
                <label for="rows-per-page" style="margin-top:8px" class="pr-3 pl-2">Page Size: </label>
                <select style="margin-top:5px" class="pl-2 page-size-selector-select" id="rows-per-page"
                  v-model="localRowsPerPage" @change="updatePageSize">
                  <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Table Section End -->
</template>

<script>
export default {
  name: "DataTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    rowsPerPage: {
      type: Number,
      default: 5,
    },
    showPageSize: {
      type: Boolean,
      default: true,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentPage: 1,
      sortColumn: null,
      sortDirection: "asc",
      localRowsPerPage: this.rowsPerPage,
      pageSizes: [5, 10, 15, 20],
    };
  },
  computed: {
    sortedData() {
      if (!this.sortColumn) return this.data;

      return [...this.data].sort((a, b) => {
        const aValue = a[this.sortColumn];
        const bValue = b[this.sortColumn];

        if (aValue < bValue) return this.sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    },
    paginatedData() {
      if (!this.showPagination) {
        return this.sortedData;
      }
      const start = (this.currentPage - 1) * this.localRowsPerPage;
      const end = start + this.localRowsPerPage;
      return this.sortedData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.localRowsPerPage);
    },
  },
  methods: {
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = column;
        this.sortDirection = "asc";
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    updatePageSize() {
      this.$emit('update:rows-per-page', this.localRowsPerPage);
      this.currentPage = 1;
    },
  },
};
</script>

<style>
th {
  cursor: pointer;
  text-align: left;
  background-color: #f4f4f447;
  padding: 14px;
  padding-left: 25px;
  color: #0f0d0dc7;
}

th span {
  margin-left: 4px;
}

td {
  padding: 14px;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  padding-left: 25px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f4f4f4;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.page-size-selector-select {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>
