<template>
  <div class="datatable">
    <table>
      <thead>
        <tr class="bg-gray-100">
          <th v-for="column in columns" :key="column.key" :style="{'min-width':column.width,'width':column.width,'text-align':column.textAlign}">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td v-for="column in columns" :key="column.key" :style="{'font-weight':column.fontWeight,'text-align':column.textAlign}">
            {{ item[column.key] }}
          </td>
        </tr>
      </tbody>
    </table>
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
  },
  
computed: {
    tableData() {
      return this.data;
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
</style>