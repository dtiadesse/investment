<template>
  <div class="datatable">
    <table>
      <thead>
        <tr class="bg-gray-100">
          <th class="font-bold"></th>
          <th class="text-center">Initial</th>
          <th class="text-center">Latest Revised</th>
          <th class="text-center">Delta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td style="font-weight:600">{{ item.Title }}</td>
          <td class="text-center">{{item.Initial}}</td>
          <td class="text-center">{{item.LatestRevised}}</td>
          <td :style="{'background-color':item.Delta<0?'rgb(254 242 242)':'rgb(220 252 231)','color':item.Delta<0?'red':'green','text-align':'center'}">{{item.Delta}}</td>
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