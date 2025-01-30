<template>
  <div>
    <Breadcrumb :breadCrumbItems="breadCrumbItems" :bottomTitle="tableData.Title">
    </Breadcrumb>

    <div class="border border-gray-200 rounded-lg mb-5 bg-white">
      <InvestmentAssessmentCriteria :tableData="tableData.InvestmentAssessmentCriteria" />
    </div>

    <div class="p-3 pb-0 border border-gray-200 rounded-lg bg-white dark:border-gray-700 mb-3">
      <div class="flex items-center justify-between  m-3 mb-5">
        <h2 class="text-xl font-bold">Financial Impact</h2>
        <button @click="goToEditInvestment"
          class="text-black flex items-center border border-gray-300 font-bold rounded text-sm px-2 py-1">
          <svg class="h-6 w-6 mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.7 5.2a1.024 1.024 0 0 1 0 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 0 1 1.448 0zm-4.166 5.614-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"/></svg>
          <p class="text-base">Edit Data</p>
        </button>
      </div>
      <div class="flex items-center justify-between m-3 mb-0">
        <div class="mr-5 pr-5 pb-5">
          <p class="text-xl text-gray-600 mb-3">
            Revenue ($)
          </p>
          <BarRevenueChart :datasets="data" :labels="labels"  />
        </div>
        <div class="pb-5">
          <p class="text-xl text-gray-600 mb-3">
            EBITDA (?x)
          </p>
          <BarEBITDAChart :datasets="data" :labels="labels" />
        </div>
      </div>
      <div class="flex justify-center mb-5">
        <div class="mr-4 flex"><p class="w-2 h-2 rounded-full mr-2 mt-2.5" style="background-color:#2C2F48"></p><p class="text-base text-gray-600"> Underwriting</p></div>
        <div class="flex"><p class="w-2 h-2 rounded-full mr-2 mt-2.5" style="background-color:#00A8E8"></p><p class="text-base text-gray-600"> Actuals + Forecast</p></div>
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div class="bg-white p-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between m-3 mb-5">
          <h2 class="text-xl font-bold">Financial Returns</h2>
          <button @click="goToEditInvestment"
            class="text-black flex items-center border border-gray-300 font-bold rounded text-sm px-2 py-1">
            <svg class="h-6 w-6 mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.7 5.2a1.024 1.024 0 0 1 0 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 0 1 1.448 0zm-4.166 5.614-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"/></svg>
            <p class="text-base">Edit Data</p>
          </button>
        </div>
        <div class="m-3 mt-0">
          <FinancialReturnsTable :data="tableData.FinancialReturns" :columns="tableColumns">
          </FinancialReturnsTable>
        </div>
      </div>
      <div class="bg-white p-3 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between m-3 mb-5">
          <h2 class="text-xl font-bold">Other KPI's</h2>
          <button @click="goToEditInvestment"
            class="text-black flex items-center border border-gray-300 font-bold rounded text-sm px-2 py-1">
            <svg class="h-6 w-6 mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.7 5.2a1.024 1.024 0 0 1 0 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 0 1 1.448 0zm-4.166 5.614-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"/></svg>
            <p class="text-base">Edit Data</p>
          </button>
        </div>
        <div class="m-3 mt-0">
          <OtherKPISTable :data="tableData.OtherKpis" :columns="tableKPIColumns">
          </OtherKPISTable>
        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.container {
  background-color: white;
  max-width: 100%;
  border: none;
}
</style>

<script>
definePageMeta({
  layout: "home",
});
export default {
  data() {
    return {
      labels: [],
      tableColumns: [
        {
          label: "",
          key: "Title",
          width: "20%",
          color: "#000",
          fontWeight: "600",
        },
        {
          label: "Initial",
          key: "Initial",
          width: "20%",
          textAlign: "center"
        },
        { label: "Latest Revised", key: "LatestRevised", width: "30%", textAlign: "center" },
        { label: "Delta", key: "Delta", width: "20%", minusValueColor: "red", plusValueColor: "green", minusBgValueColor: "rgb(254 242 242)", plusBgValueColor: "rgb(220 252 231)", textAlign: "center" },
      ],
      tableKPIColumns: [
        {
          label: "",
          key: "Title",
          width: "20%",
          color: "#000",
          fontWeight: "600",
        },
        {
          label: "Baseline",
          key: "Baseline",
          width: "20%",
          textAlign: "center",
        },
        { label: "Target", key: "Target", width: "30%", textAlign: "center" },
        { label: "Current", key: "Current", width: "20%", textAlign: "center" },
      ],
      data: [],
      loading: true,
      error: null,
      tableData: [],
      breadCrumbItems: []

    }
  },
  watch: {
    tableData: {
      immediate: true,
      handler() {
        this.loading = false;
      },
    },
  },
  created() {
    this.fetchInvestmentsDetails();
  },
  methods: {
    async fetchInvestmentsDetails() {
      try {
        const { id } = useRoute().params

        const response = await fetch('http://localhost:3001/investment/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data[0])
        this.tableData = data[0];
        this.labels = this.tableData.ChartFinancialImpactDataLabel
        this.data = [this.tableData.ChartFinancialImpactDataValue1, this.tableData.ChartFinancialImpactDataValue2];
        this.breadCrumbItems = [
          {
            text: 'Home',
            href: '/'
          },
          {
            text: 'All Investments',
            href: '/'
          },
          {
            text: `${this.tableData.Title}`,
            href: '#',
            color: 'rgb(10 35 104)'
          }
        ]
      } catch (err) {
        console.log(err);
      }
    },
    goToEditInvestment() {
      const { id } = useRoute().params
      this.$router.push('/investment/edit/'+id);
    },

  },
};

</script>
