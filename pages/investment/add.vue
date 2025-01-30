<template>
  <div class="p-4 bg-gray-50 min-h-screen">

    <section>
      <Breadcrumb :breadCrumbItems="breadCrumbItems">
      </Breadcrumb>
    </section>
    <!-- Header -->
    <section class="flex p-4 border border-gray-300 rounded bg-white justify-end">
      <button type="button" class="bg-white border border-gray-300 mr-3 text-black px-4 py-2 rounded hover:bg-white-700">Cancel</button>
      <button type="button" @click="handleSubmit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
    </section>

    <!-- Main Grid -->      
    <div class="grid sm:grid-cols-[1fr_1fr_1fr] md:grid-cols-[2fr_2fr_2fr] gap-4 mt-6">
      <!-- Main Details -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Main Details</h2>
          <label class="block text-sm font-medium mb-2">Title</label>
          <input type="text" v-model="form.Title" class="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Progress Capital - Team Recruiting" />

          <label class="block text-sm font-medium mb-2">Type</label>
          <select v-model="form.InvestmentType" class="w-full p-2 border border-gray-300 rounded mb-4">
            <option disabled value="">Select an type</option>
            <option v-for="(value, index) in investmentType" :key="index" :value="value">
              {{ value }}
            </option>
          </select>

          <label class="block text-sm font-medium mb-2">Investment Detail</label>
          <select v-model="form.InvestmentDetails" class="w-full p-2 border border-gray-300 rounded mb-4">
            <option disabled value="">Select an Investment Details</option>
            <option v-for="(value, index) in investmentDetails" :key="index" :value="value">
              {{ value }}
            </option>
          </select>

          <label class="block text-sm font-medium mb-2">Size</label>
          <select v-model="form.Size" class="w-full p-2 border border-gray-300 rounded">
            <option disabled value="">Select an size</option>
            <option v-for="(value, index) in size" :key="index" :value="value">
              {{ value }}
            </option>
          </select>
      </section>

      <!-- Revenue -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Revenue</h2>
          <label class="block text-sm font-medium mb-2">Base Revenue (value??)</label>
          <input v-model="form.BaseRevenue" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="8.3" />

          <label class="block text-sm font-medium mb-2">Growth Revenue (value??)</label>
          <input v-model="form.GrowthRevenue" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="10" />

          <label class="block text-sm font-medium mb-2">Growth</label>
          <input v-model="form.Growth" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="1.7" />

          <label class="block text-sm font-medium mb-2">Growth (%)</label>
          <input v-model="form.GrowthPercentage" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="20%" />
      </section>

      <!-- Total & Risk -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Total & Risk</h2>
          <label class="block text-sm font-medium mb-2">Total Consideration (value??)</label>
          <input v-model="form.TotalConsideration" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="10" />

          <label class="block text-sm font-medium mb-2">At Risk Consideration (value??)</label>
          <input v-model="form.AtRiskGrowthAmount" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="6" />

          <div class="flex">
            <div class="mr-3">
              <label class="block text-sm font-medium mb-2">Guaranteed</label>
              <input v-model="form.GuaranteedAmount" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="6" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">(%) Guaranteed</label>
              <input v-model="form.PercentageGuaranteed" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="40%" />
            </div>
          </div>
          <div class="flex">
            <div class="mr-3">
              <label class="block text-sm font-medium mb-2">At Risk (stable)</label>
              <input v-model="form.AtRiskAmount" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">At Risk (Growth)</label>
              <input v-model="form.AtRiskGrowthAmount" type="text" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="6" />
            </div>
          </div>
      </section>
    </div>

    <div class="grid sm:grid-cols-[1fr_1fr_1fr] md:grid-cols-[2fr_3fr_1fr] gap-4 mt-6">
      <!-- Financial Returns -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Financial Returns</h2>
          <div class="flex">
            <div class="mr-3">
              <label class="block text-sm font-medium mb-2">Pre-Synergy Multiple (x)</label>
              <input type="text"  v-model="form.PreSynergyMultiple" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="3.36" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Post-Synergy Multiple (x)</label>
              <input type="text" v-model="form.PostSynergyMultiple" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="8.736" />
            </div>
          </div>

          <label class="block text-sm font-medium mb-2">Payback (yrs)</label>
          <input type="text" v-model="form.Payback" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="4.0" />

          <label class="block text-sm font-medium mb-2">IRR (%)</label>
          <input type="text" v-model="form.InternalRateofReturn" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="19.70" />

          <label class="block text-sm font-medium mb-2">Integration Period (value?)</label>
          <input type="text" v-model="form.IntegrationPeriod" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="84" />

          <label class="block text-sm font-medium mb-2">Execution Risk</label>
          <select v-model="form.ExecutionRisk" class="w-full p-2 border border-gray-300 rounded mb-4">
            <option disabled value="">Select an Execution Risk</option>
            <option v-for="(option, index) in executionRisk" :key="index" :value="option">
              {{ option }}
            </option>
          </select>
      </section>

      <!-- Other KPI -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Other KPI</h2>
        <div class="max-h-80 overflow-y-auto bg-gray-50 rounded p-4 mb-4" v-if="OtherKpis.length > 0">
          <div v-for="(kpis, index) in form.OtherKpis" :key="index" class="mb-4">
            <div class="flex">
              <div class="mr-3 w-full">
                <label class="block text-sm font-medium mb-2">KPI Name</label>
                <input type="text" v-model="form.OtherKpis[index].Title" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="KPI Name" />
              </div>
              <div class="mt-7">
                <button @click="removeInput(index)"
                  class="flex px-3 py-2 ml-2 text-red-800 text-sm font-bold text-center border border-red-800 inline-flex items-center rounded-lg focus:outline-none">
                  Delete
                  <svg class="h-5 w-5 text-red-800 ml-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex">
              <div class="mr-3 w-full">
                <label class="block text-sm font-medium mb-2">Value type</label>
                <select class="w-full p-2 border border-gray-300 rounded mb-4">
                  <option>$,%,free text</option>
                </select>
              </div>
              <div class="mr-3 w-full">
                <label class="block text-sm font-medium mb-2">Base line</label>
                <input type="text" v-model="form.OtherKpis[index].Baseline" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="1.5m" />
              </div>
              <div class="mr-3 w-full">
                <label class="block text-sm font-medium mb-2">Target</label>
                <input type="text" v-model="form.OtherKpis[index].Target" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="0.6m" />
              </div>
              <div class="mr-3 w-full">
                <label class="block text-sm font-medium mb-2">Current</label>
                <input type="text" v-model="form.OtherKpis[index].Current" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="0.2m" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="addInput"
            class="flex bg-white font-medium border border-gray-300 mr-3 text-black px-4 py-2 rounded hover:bg-white-700">
            Add More
            <svg class="h-6 w-6 text-white-700 ml-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </section>

      <!-- Additional Data -->
      <section class="p-4 border border-gray-300 rounded bg-white">
        <h2 class="text-lg font-bold mb-4">Additional Data</h2>
          <label class="block text-sm font-medium mb-2">Capital as % of Revenue</label>
          <input type="text" v-model="form.CapitalAsPercentageOfRevenue" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="0.48x" />

          <label class="block text-sm font-medium mb-2">FCF ($)</label>
          <input type="text" v-model="form.FreeCashFlow" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="1.6" />

          <label class="block text-sm font-medium mb-2">Base Cum. CF</label>
          <input type="text" v-model="form.BaseCumulativeCashFlow" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="8,736" />

          <label class="block text-sm font-medium mb-2">Growth Cum.</label>
          <input type="text" v-model="form.GrowthCumulativeCashFlow" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="8,736" />
      </section>
    </div>

    <!-- Financial Impact -->
    <section class="mt-6 p-4 border border-gray-300 rounded bg-white">
      <h2 class="text-lg font-bold mb-4">Financial Impact</h2>
      <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th class="px-4 py-2 text-gray-600 text-left">Total</th>
            <th v-for="(year, index) in years" class="border text-left border-blue-300 bg-blue-50 px-4 py-2 text-gray-600">
              <p class="mb-1">Year {{year}}</p>
              <input type="text" placeholder="8,736" class="mb-2 w-full border border-gray-300 rounded-md p-2">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(month, index) in months">
            <td class="px-4 py-2 text-gray-800">{{month}}</td>
            <td class="border bg-gray-100 border-blue-300 px-4 py-2"><input type="text" placeholder="8,736" class="w-full border border-gray-300 rounded-md p-2"></td>
            <td class="border bg-gray-100 border-blue-300 px-4 py-2"><input type="text" placeholder="8,736" class="w-full border border-gray-300 rounded-md p-2"></td>
            <td class="border bg-gray-100 border-blue-300 px-4 py-2"><input type="text" placeholder="8,736" class="w-full border border-gray-300 rounded-md p-2"></td>
            <td class="border bg-gray-100 border-blue-300 px-4 py-2"><input type="text" placeholder="8,736" class="w-full border border-gray-300 rounded-md p-2"></td>
            <td class="border bg-gray-100 border-blue-300 px-4 py-2"><input type="text" placeholder="8,736" class="w-full border border-gray-300 rounded-md p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>

    <section class="flex p-4 border border-gray-300 rounded bg-white justify-end mt-6">
      <button type="button" class="bg-white border border-gray-300 mr-3 text-black px-4 py-2 rounded hover:bg-white-700">Cancel</button>
      <button type="button" @click="handleSubmit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
    </section>
  </div>

</template>

<script>
definePageMeta({
  layout: "home",
});
export default {
  data() {
    return {
      form: {
          id:"",
          Title: "",
          InvestmentType: "",
          InvestmentDetails:"",
          Size:"",
          BaseRevenue:"",
          GrowthRevenue:"",
          Growth:"",
          GrowthPercentage:"",
          TotalConsideration:"",
          atRiskConsideration:"",
          GuaranteedAmount:"",
          PercentageGuaranteed:"",
          AtRiskAmount:"",
          AtRiskGrowthAmount:"",
          ThreeYearRevenueGrowthValue:"",
          ThreeYearRevenueGrowthPercentage:"",
          threeYearEbitdaGrowth:"",
          guaranteedOther:"",
          CapitalAsPercentageOfEBITDA:"",
          threeYearRevenueGrowth:"",
          CapitalAsPercentageOfRevenue:"",
          FreeCashFlow:"",
          BaseCumulativeCashFlow:"",
          GrowthCumulativeCashFlow:"",
          PreSynergyMultiple:"",
          PostSynergyMultiple:"",
          Payback:"",
          InternalRateofReturn:"",
          IntegrationPeriod:"",
          ExecutionRisk:"",
          OtherKpis: [{ Title: "" ,Baseline:"",Target:"",Current:""}]
      },
      investmentType: ["ADS Investment","SS Investment"],
      investmentDetails: ["RECRUITING", "M&A-SERVICES", "M&A-ADVISORY", "M&A-Services","Platform Investments"],
      size: ["M&A - > $15M","M&A - < $15M", "Platform - > $3M", "Platform - $1M - $3M", "R&R - < $1M rev","R&R - $1M - $5M rev","R&R - >$5M Rev"],
      executionRisk:["Low", "MEDIUM", "High"],
      OtherKpis: [
        { Title: "" ,Baseline:"",Target:"",Current:""}, // Initial input field
      ],
      years: [1, 2, 3, 4, 5],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      breadCrumbItems: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'All Investments',
          href: '/'
        },
        {
          text: `Add page`,
          href: '#',
          color: 'rgb(10 35 104)'
        }
      ]

    };
  },
  methods: {
    addInput() {
    console.log(23)
      this.form.OtherKpis.push(this.form.OtherKpis); // Add a new input
    },
    removeInput(index) {
      this.form.OtherKpis.splice(index, 1); // Remove an input by index
    },
    handleSubmit() {
      console.log("Form submitted:", this.form);
    },
  },
};

</script>

<style scoped>
/* Add any custom styling if necessary */
</style>
