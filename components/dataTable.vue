<template>
  <div class="datatable">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)" :style="{'min-width':column.width,'width':column.width,'color':'#fff'}">
            {{ column.label }}
            <span v-if="sortColumn === column.key">
              {{ sortDirection === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th v-if="$slots.action"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <td v-for="column in columns" :key="column.key" :style="{'color':column.color,'font-weight':column.fontWeight,'color':'#fff'}">
            {{ item[column.key] }}
          </td>

          <td v-if="$slots.action">
            <slot name="action" :item="item"></slot>
          </td>

        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <nav class="flex items-center -space-x-px" aria-label="Pagination">
        <button type="button"  @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 hover:bg-gray-400 focus:outline-none focus:bg-gray-100 text-gray-900 disabled:opacity-30 disabled:pointer-events-none hover:text-gray-900" aria-label="Previous">
          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span class="hidden sm:block">Previous</span>
        </button>
        <button type="button" class="min-h-[38px] min-w-[38px] flex hover:bg-gray-400 justify-center hover:text-gray-900 items-center border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg  disabled:opacity-50 disabled:pointer-events-none" aria-current="page" @click="changePage(page)" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">{{page}}</button>
        <button type="button" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 hover:bg-gray-400 hover:text-gray-900 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
          <span class="hidden sm:block" >Next</span>
          <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  </div>
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
      sortDirection: 'asc'
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
      return this.sortedData.slice(start, end);
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
.datatable {
  width: 100%;
}
table {
  width: 100%;
  border-collapse: collapse;
   
}
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
button {
  cursor: pointer;
   font-weight:500;
}
button.active {
  font-weight: bold;
  background-color: blue;
  color:#fff;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.nextButton{
  background-color:#ddd6;
  font-weight:500;
   border-radius:5px;
}
.noButton{
  background-color:#fff;
   border-radius:5px;
   font-weight:500;
}
</style>
