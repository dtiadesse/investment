<template>
  <div class="container mx-auto p-4">
    <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3">
      <InvestmentAssessmentCriteria/>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold p-4">Financial Impact</h2>
        <button class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 me-2">
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
      </div>
      <div class="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-xl font-bold p-4">Financial Returns</h2>
        <div class="m-4 mt-0">
          <FinancialReturnsTable :data="tableData" :columns="tableColumns">
          </FinancialReturnsTable>        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "home",
});
const tableData = [
        {
          Title: "IRR(%)",
          Initial: "3.36",
          LatestRevised: "5.22",
          Delta: "-4",
        },
        {
          Title: "Payback(yrs)",
          Initial: "3.36",
          LatestRevised: "5.22",
          Delta: "0.2",
        },
        {
          Title: "Pre-EBITDAx",
          Initial: "3.36",
          LatestRevised: "5.22",
          Delta: "0.2",
        },
        {
          Title: "Post-EBITDAx",
          Initial: "3.36",
          LatestRevised: "5.22",
          Delta: "0.3",
        },
        {
          Title: "CTA ($/m)",
          Initial: "3.36",
          LatestRevised: "5.22",
          Delta: "0.5",
        }
      ]
const tableColumns = [
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
      ]
</script>
