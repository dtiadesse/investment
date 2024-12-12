<template>
  <div class="datatable">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)" style="min-width:column.width">
            {{ column.label }}
            <span v-if="sortColumn === column.key">
              {{ sortDirection === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
          <th v-if="$slots.action">Actions</th>
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
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
        Previous
      </button>
      <button @click="changePage(page)" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
        {{ page }}
      </button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next
      </button>
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
  background-color: #f4f4f4;
  padding: 8px;
}
th span {
  margin-left: 4px;
}
td {
  padding: 8px;
  border: 1px solid #ddd;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button.active {
  font-weight: bold;
  background-color: #ddd;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
