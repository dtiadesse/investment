<template>
  <!-- ====== Table Section Start -->
  <section class="bg-white dark:bg-dark lg:py-[120px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="max-w-full overflow-x-auto">
            <table class="w-full table-auto">
              <thead>
                <tr class="text-center bg-primary">
                  <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)" :class="column.minWidthClass" class="w-1/6 border-l border-transparent py-4 px-3 text-lg font-medium text-black lg:py-7 lg:px-4">
                    {{ column.label }}
                    <span v-if="sortColumn === column.key">
                    {{ sortDirection === 'asc' ? '↑' : '↓' }}
                    </span>
                  </th>
                  <th v-if="$slots.action"></th>                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in paginatedData" :key="item.id">
                <td v-for="column in columns" :key="column.key">
                    {{ item[column.key] }}
                </td>
                <td v-if="$slots.action">
                    <slot name="action" :item="item"></slot>
                </td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Table Section End -->
</template>
<script>
export default {
  name: 'DataTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    rowsPerPage: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      currentPage: 1,
      sortColumn: null,
      sortDirection: 'desc'
    };
  },
  computed: {
    sortedData() {
      if (!this.sortColumn) return this.data;

      return [...this.data].sort((a, b) => {
        const aValue = a[this.sortColumn];
        const bValue = b[this.sortColumn];

        if (aValue < bValue) return this.sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
     // return this.sortedData.slice(start, end);
      return this.sortedData;
    },
    totalPages() {
      return Math.ceil(this.data.length / this.rowsPerPage);
    }
  },
  methods: {
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>

<style scoped>

th {
  cursor: pointer;
  text-align: left;
  background-color: #f4f4f447;
  padding: 14px;
  padding-left: 25px;
  color:#0f0d0dc7
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
  margin-bottom:10px;
}
</style>