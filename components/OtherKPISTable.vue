<template>
  <div class="datatable">
    <table>
      <thead>
        <tr class="bg-gray-100">
          <th class="font-bold"></th>
          <th class="text-center">Baseline</th>
          <th class="text-center">Target</th>
          <th class="text-center">Current</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td style="font-weight:600">{{ item.Title }}</td>
          <td class="text-center">{{item.Baseline}}</td>
          <td class="text-center">{{item.Target}}</td>
          <td class="text-center">{{item.Current}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OtherKPIsTable',
  props: {
    data: {
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