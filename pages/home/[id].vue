<template>
  <div class="container mx-auto p-4">
    <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3">
      <nav class="text-base font-semibold text-gray-600 p-5">
        <ol class="flex items-center space-x-2">
          <li><a href="/" class="">Home</a></li>
          <li>></li>
          <li><a href="/investments" class="">All Investments</a></li>
          <li>></li>
          <li>Progress Capital - Team Recruiting</li>
        </ol>
      </nav>
    </div>
    <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3">
      <InvestmentAssessmentCriteria :tableData="tableData.InvestmentAssessmentCriteria"/>
    </div>
    <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3">
      <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold p-4">Financial Impact</h2>
            <button @click="goToEditInvestment" class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-2 py-1 me-2">
               <svg
                    class="h-6 w-6 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="black"
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
              <p class="text-base">Edit Charts</p>
            </button>  
          </div>
          <div class="flex items-center justify-between">
          <div class="">
          <p class="px-4 text-xl text-gray-600">
          Revenue ($)
        </p>
        
          <FinancialImpactBarChart
              :seriesLabels="seriesLabels"
              :datasets="data"
              :labels="labels"
          />
          </div>
          <div class="">
          <p class="px-4 text-xl text-gray-600">
          EBITDA (?x)
        </p>
          <FinancialImpactBarChart
              :datasets="data"
              :labels="labels"
          />
          </div>
          </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold p-4">Financial Returns</h2>
        <button @click="goToEditInvestment" class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-2 py-1 me-2">
               <svg
                    class="h-6 w-6 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="black"
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
              <p class="text-base">Edit Charts</p>
            </button>
            </div>
        <div class="m-4 mt-0">
          <FinancialReturnsTable :data="tableData.FinancialReturns" :columns="tableColumns">
          </FinancialReturnsTable>        
        </div>
      </div>
      <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold p-4">Other KPI's</h2>
        <button @click="goToEditInvestment" class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-2 py-1 me-2">
               <svg
                    class="h-6 w-6 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="black"
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
              <p class="text-base">Edit Charts</p>
            </button>
            </div>
        <div class="m-4 mt-0">
          <OtherKPISTable :data="tableData.OtherKpis" :columns="tableKPIColumns">
          </OtherKPISTable>        
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import { useRouter } from "vue-router";

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
          textAlign:"center"
        },
        { label: "Latest Revised", key: "LatestRevised",width: "30%", textAlign:"center" },
        { label: "Delta", key: "Delta",width: "20%", minusValueColor:"red",plusValueColor:"green",minusBgValueColor:"rgb(254 242 242)",plusBgValueColor:"rgb(220 252 231)",textAlign:"center" },
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
          textAlign:"center",
        },
        { label: "Target", key: "Target",width: "30%", textAlign:"center" },
        { label: "Current", key: "Current",width: "20%",textAlign:"center"},
      ],
      seriesLabels: ["Pre-Synergy Multiple", "Post-Synergy Multiple"],
      barColors: ["#2C2F48", "#00A8E8"],
      data:[],
      loading: true,
      error: null,
      tableData:[],
      
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
        
        const response = await fetch('http://localhost:3001/investments/'+id);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        this.tableData = await response.json();
        console.log(this.tableData )
        this.labels = this.tableData.ChartFinancialImpactDataLabel
        this.data = [this.tableData.ChartFinancialImpactDataValue1, this.tableData.ChartFinancialImpactDataValue2];
        console.log(this.data);
      } catch (err) {
        console.log(err);
      }
    },
    goToEditInvestment() {
      this.$router.push('/investmentEdit');
    },
    
  },
};
    
</script>
