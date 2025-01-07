<template>
  <transition name="modal-fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="relative bg-white rounded-lg shadow-lg max-w-4xl p-4">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
         @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 class="text-xl font-bold mb-4 text-center  half-underline">Add New Investment</h2>
      <div>
          <Tabs :currentTab="currentTab" :tabs="['Main Details', 'Revenue', 'Total & Risk','Other','Financial Returns','Financial Impact']">
            <template #default="{ activeTab,currentTab }"> 
             <form @submit.prevent="handleSubmit">  
              <div v-if="activeTab === 0">      
                  <div class="flex items-center justify-center">
                    <div class="max-w-md w-full">
                        <!-- Title Field -->
                        <div class="mb-4">
                          <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                            Title
                          </label>
                          <input
                            id="title"
                            type="text"
                            v-model="form.title"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Progress Capital - Team - Recruiting"
                          />
                          <span v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</span>
                        </div>

                        <!-- Type Field -->
                        <div class="mb-4">
                          <label for="type" class="block text-sm font-medium text-gray-700 mb-2">
                            Type
                          </label>
                          <select
                            id="type"
                            v-model="form.selectedType"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an type</option>
                            <option v-for="(option, index) in options" :key="index" :value="option">
                              {{ option }}
                            </option>
                          </select>
                        </div>

                        <!-- Investment Details Field -->
                        <div class="mb-4">
                          <label for="investmentDetails" class="block text-sm font-medium text-gray-700 mb-2">
                            Investment Details
                          </label>
                          <select
                            id="investmentDetails"
                            v-model="form.investmentDetails"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an Investment Details</option>
                            <option v-for="(option, index) in options" :key="index" :value="option">
                              {{ option }}
                            </option>
                          </select>
                        </div>
                        
                        <!-- Size Field -->
                        <div class="mb-4">
                          <label for="size" class="block text-sm font-medium text-gray-700 mb-2">
                            Size
                          </label>
                          <select
                            id="size"
                            v-model="form.size"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an size</option>
                            <option v-for="(option, index) in options" :key="index" :value="option">
                              {{ option }}
                            </option>
                          </select>
                        </div>

                      
                    </div>
                  </div>
                  <!-- Submit Button -->
                  <div class="m-4 flex ">
                        <button
                          type="button"
                          @click="close()"
                          class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          @click="validateCurrentTab(0)"
                          class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                        >
                          Next
                        </button>
                  </div>
              </div>
              <div v-if="activeTab === 1"> 
              <div class="flex items-center justify-center">
                <div class="max-w-md w-full">
                    <!-- Base Revenue Field -->
                    <div class="mb-4">
                      <label for="baseRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Base Revenue (value??)
                      </label>
                      <input
                        id="baseRevenue"
                        type="text"
                        v-model="form.baseRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Progress Capital - Team - Recruiting"
                      />
                    </div>

                    <!-- Growth Revenue Field -->
                    <div class="mb-4">
                      <label for="growthRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Growth Revenue
                      </label>
                      <input
                        id="growthRevenue"
                        type="text"
                        v-model="form.growthRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Progress Capital - Team - Recruiting"
                      />
                    </div>

                    <!-- Growth Field -->
                    <div class="mb-4">
                      <div class="flex">
                        <div class="mr-4">
                        <label for="growth" class="block text-sm font-medium text-gray-700 mb-2">
                          Growth
                        </label>
                        <input
                          id="growth"
                          type="text"
                          v-model="form.growth"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Growth"
                        />
                        </div>
                        <div>
                        <label for="growthP" class="block text-sm font-medium text-gray-700 mb-2">
                          Growth(%)
                        </label>
                        <input
                          id="growthP"
                          type="text"
                          v-model="form.growthP"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Growth(%)"
                        />
                        </div>
                      </div>
                    </div>                  
                </div>
              </div>
              <!-- Submit Button -->
              <div class="m-4 flex ">
                    <button
                      type="button"
                      @click="previousTab()"
                      class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      @click="validateCurrentTab(1)"
                      class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                      Next
                    </button>
                    </div>
              </div>
              <div v-if="activeTab === 2"> 
              <div class="flex items-center justify-center">
                <div class="max-w-md w-full">
                    <!-- Total Consideration Field -->
                    <div class="mb-4">
                      <label for="totalConsideration" class="block text-sm font-medium text-gray-700 mb-2">
                        Total Consideration (value??)
                      </label>
                      <input
                        id="totalConsideration"
                        type="text"
                        v-model="form.totalConsideration"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Total Consideration"
                      />
                    </div>

                    <!-- At Risk Consideration Field -->
                    <div class="mb-4">
                      <label for="atRiskConsideration" class="block text-sm font-medium text-gray-700 mb-2">
                        At Risk Consideration (value??)
                      </label>
                      <input
                        id="atRiskConsideration"
                        type="text"
                        v-model="form.atRiskConsideration"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="At Risk Consideration"
                      />
                    </div>

                    <!-- Guaranteed Field -->
                    <div class="mb-4">
                      <div class="flex">
                        <div class="mr-4">
                        <label for="guaranteed" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed
                        </label>
                        <input
                          id="guaranteed"
                          type="text"
                          v-model="form.guaranteed"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Guaranteed"
                        />
                        </div>
                        <div>
                        <label for="guaranteedp" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed(%)
                        </label>
                        <input
                          id="guaranteedp"
                          type="text"
                          v-model="form.guaranteedp"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="(%)Guaranteed"
                        />
                        </div>
                      </div>
                    </div>  

                    <!-- At Risk Stable Field -->
                    <div class="mb-4">
                      <label for="atRisk" class="block text-sm font-medium text-gray-700 mb-2">
                        At Risk (Stable)
                      </label>
                      <input
                        id="atRisk"
                        type="text"
                        v-model="form.atRisk"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="At Risk Stable"
                      />
                    </div>  

                    <!-- At Risk Growth Field -->
                    <div class="mb-4">
                      <label for="atGrowth" class="block text-sm font-medium text-gray-700 mb-2">
                        At Risk (Growth)
                      </label>
                      <input
                        id="atGrowth"
                        type="text"
                        v-model="form.atGrowth"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="At Risk Stable"
                      />
                    </div>                
                </div>
              </div>
              <!-- Submit Button -->
              <div class="m-4 flex ">
                    <button
                      type="button"
                      @click="previousTab()"
                      class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      @click="validateCurrentTab(2)"
                      class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                      Next
                    </button>
                    </div>                   
              </div>
              <div v-if="activeTab === 3"> 
              <div class="flex items-center justify-center">
                <div class="px-6 max-w-xl max-h-96 overflow-y-auto">
                    <!-- Growth Field -->
                    <div class="mb-4">
                      <div class="flex">
                        <div class="mr-4">
                        <label for="threeYearRevenueGrowthOther" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR REVENUE GROWTH Value
                        </label>
                        <input
                          id="threeYearRevenueGrowthOther"
                          type="text"
                          v-model="form.threeYearRevenueGrowthOther"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="8.3"
                        />
                        </div>
                        <div>
                        <label for="threeYearRevenueGrowthOtherP" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR REVENUE GROWTH (%)
                        </label>
                        <input
                          id="threeYearRevenueGrowthOtherP"
                          type="text"
                          v-model="form.threeYearRevenueGrowthOtherP"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="0.84%"
                        />
                        </div>
                      </div>
                    </div>         
                    
                    <!-- Growth Field -->
                    <div class="mb-4">
                      <div class="flex">                      
                        <div class="mr-2">
                        <label for="threeYearEbitdaGrowth" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR EBITDA GROWTH
                        </label>
                        <input
                          id="threeYearEbitdaGrowth"
                          type="text"
                          v-model="form.threeYearEbitdaGrowth"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="1.7"
                        />
                        </div>
                        <div class="mr-2">
                        <label for="guaranteedOther" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed
                        </label>
                        <input
                          id="guaranteedOther"
                          type="text"
                          v-model="form.guaranteedOther"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="4"
                        />
                        </div>
                        <div>
                        <label for="capitalEbitda" class="block text-sm font-medium text-gray-700 mb-2">
                          Capital as % of EBITDA
                        </label>
                        <input
                          id="capitalEbitda"
                          type="text"
                          v-model="form.capitalEbitda"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="2.41x"
                        />
                        </div>
                      </div>
                    </div>  
                    
                    <!-- 3 Year Revenue Growth Field -->
                    <div class="mb-4">
                      <label for="threeYearRevenueGrowth" class="block text-sm font-medium text-gray-700 mb-2">
                        3 Year Revenue Growth (%)
                      </label>
                      <input
                        id="threeYearRevenueGrowth"
                        type="text"
                        v-model="form.threeYearRevenueGrowth"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.32%"
                      />
                    </div>

                    <!-- Capital as % of Revenue Field -->
                    <div class="mb-4">
                      <label for="capitalRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Capital as % of Revenue
                      </label>
                      <input
                        id="capitalRevenue"
                        type="text"
                        v-model="form.capitalRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.48x"
                      />
                    </div>
                    
                    <!-- FCF Field -->
                    <div class="mb-4">
                      <label for="fcf" class="block text-sm font-medium text-gray-700 mb-2">
                        FCF (%)
                      </label>
                      <input
                        id="fcf"
                        type="text"
                        v-model="form.fcf"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="1.6"
                      />
                    </div>

                    <!-- Base Cum Field -->
                    <div class="mb-4">
                      <label for="baseCumCF" class="block text-sm font-medium text-gray-700 mb-2">
                        Base Cum. CF
                      </label>
                      <input
                        id="baseCumCF"
                        type="text"
                        v-model="form.baseCumCF"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.7%"
                      />
                    </div>
                    
                    <!-- Growth Cum. Field -->
                    <div class="mb-4">
                      <label for="growthCum" class="block text-sm font-medium text-gray-700 mb-2">
                      Growth Cum.
                      </label>
                      <input
                        id="growthCum"
                        type="text"
                        v-model="form.growthCum"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.7%"
                      />
                    </div>               
                </div>
              </div>
              <!-- Submit Button -->
              <div class="m-4 flex ">
                    <button
                      type="button"
                      @click="previousTab()"
                      class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      @click="validateCurrentTab(3)"
                      class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                      Next
                    </button>
                    </div>
              </div>
              <div v-if="activeTab === 4"> 
              <div class="flex items-center justify-center">
                <div class="max-w-md w-full">
                  <!-- Synergry Field -->
                    <div class="mb-4">
                      <div class="flex">
                        <div class="mr-4">
                        <label for="presynergy" class="block text-sm font-medium text-gray-700 mb-2">
                          Pre-Synergry Multiple (x)
                        </label>
                        <input
                          id="presynergy"
                          type="text"
                          v-model="form.presynergy"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="3.36"
                        />
                        </div>
                        <div>
                        <label for="postSynergy" class="block text-sm font-medium text-gray-700 mb-2">
                          Post-Synergry Multiple (x)
                        </label>
                        <input
                          id="postSynergy"
                          type="text"
                          v-model="form.postSynergy"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="8.756"
                        />
                        </div>
                      </div>
                    </div> 

                    <!-- Payback Field -->
                    <div class="mb-4">
                      <label for="payback" class="block text-sm font-medium text-gray-700 mb-2">
                        Payback (yrs)
                      </label>
                      <input
                        id="payback"
                        type="text"
                        v-model="form.payback"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="4.0"
                      />
                    </div>

                    <!-- IRR Field -->
                    <div class="mb-4">
                      <label for="irr" class="block text-sm font-medium text-gray-700 mb-2">
                        IRR (%)
                      </label>
                      <input
                        id="irr"
                        type="text"
                        v-model="form.irr"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="19.70"
                      />
                    </div>

                    <!-- Integration Period Field -->
                    <div class="mb-4">
                      <label for="integrationPeriod" class="block text-sm font-medium text-gray-700 mb-2">
                        Integration Period (value??/month??)
                      </label>
                      <input
                        id="integrationPeriod"
                        type="text"
                        v-model="form.integrationPeriod"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="84"
                      />
                    </div>

                    <!-- Execution Risk Field -->
                    <div class="mb-4">
                      <label for="executionRisk" class="block text-sm font-medium text-gray-700 mb-2">
                        Execution Risk
                      </label>
                      <select
                        id="executionRisk"
                        v-model="form.executionRisk"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option disabled value="">Select an Execution Risk</option>
                        <option v-for="(option, index) in options" :key="index" :value="option">
                          {{ option }}
                        </option>
                      </select>
                    </div>                                   
                </div>
              </div>
              <!-- Submit Button -->
              <div class="m-4 flex ">
                    <button
                      type="button"
                      @click="previousTab()"
                      class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      @click="validateCurrentTab(4)"
                      class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                     Next
                    </button>
                    </div>
              </div>
              <div v-if="activeTab === 5"> 
              <div class="flex items-center justify-center">              
                <div class="max-w-xl w-full">
                    <p class="text-center font-bold text-xl mb-3">Set Prediction</p>
                    <!-- Year Field -->
                    <div class="mb-4">
                    <div class="flex">
                    <div class="mr-2">
                      <label for="year1" class="block text-sm font-medium text-gray-700 mb-2">
                        Year 1
                      </label>
                      <input
                        id="year1"
                        type="text"
                        v-model="form.year1"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="year2" class="block text-sm font-medium text-gray-700 mb-2">
                        Year 2
                      </label>
                      <input
                        id="year2"
                        type="text"
                        v-model="form.year2"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                    <label for="year3" class="block text-sm font-medium text-gray-700 mb-2">
                        Year 3
                      </label>
                      <input
                        id="year3"
                        type="text"
                        v-model="form.year3"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="year4" class="block text-sm font-medium text-gray-700 mb-2">
                        Year 4
                      </label>
                      <input
                        id="year4"
                        type="text"
                        v-model="form.year4"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="year5" class="block text-sm font-medium text-gray-700 mb-2">
                        Year 5
                      </label>
                      <input
                        id="year5"
                        type="text"
                        v-model="form.year5"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      </div>
                    </div>

                    <!-- Month 1 Field -->
                    <div class="mb-4">
                    <div class="flex">
                    <div class="mr-2">
                      <label for="month1" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 1
                      </label>
                      <input
                        id="month1"
                        type="text"
                        v-model="form.month1"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month2" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 1
                      </label>
                      <input
                        id="month2"
                        type="text"
                        v-model="form.month2"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                    <label for="month3" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 1
                      </label>
                      <input
                        id="month3"
                        type="text"
                        v-model="form.month3"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month4" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 1
                      </label>
                      <input
                        id="month4"
                        type="text"
                        v-model="form.month4"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month5" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 1
                      </label>
                      <input
                        id="month5"
                        type="text"
                        v-model="form.month5"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      </div>
                    </div>

                    <!-- Month Field -->
                    <div class="mb-4">
                    <div class="flex">
                    <div class="mr-2">
                      <label for="month11" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 2
                      </label>
                      <input
                        id="month11"
                        type="text"
                        v-model="form.month11"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month12" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 2
                      </label>
                      <input
                        id="month12"
                        type="text"
                        v-model="form.month12"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                    <label for="month13" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 2
                      </label>
                      <input
                        id="month13"
                        type="text"
                        v-model="form.month13"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month14" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 2
                      </label>
                      <input
                        id="month14"
                        type="text"
                        v-model="form.month14"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      <div class="mr-2">
                      <label for="month15" class="block text-sm font-medium text-gray-700 mb-2">
                        Month 2
                      </label>
                      <input
                        id="month15"
                        type="text"
                        v-model="form.month15"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.752"
                      />
                      </div>
                      </div>
                    </div>                
                </div>
              </div>
              <!-- Submit Button -->
              <div class="m-4 flex ">
                    <button
                      type="button"
                      @click="previousTab()"
                      class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                    >
                      Add investment
                    </button>
                    </div>
              </div>
              </form>
            </template>  
          </Tabs>  
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import Tabs from "~/components/Tabs.vue";
import { reactive } from 'vue';

  export default {
    props: {
      tableData: {
        type: Array,
        required: true,
      },
      editData: {
        type: Object,
        default: () => ({}),
      },
    },
    name: 'Modal',
    data() {
      return {
        currentTab: 0,
        form: {
          id:"",
          title: "",
          selectedType: "",
          investmentDetails:"",
          size:"",
          baseRevenue:"",
          growthRevenue:"",
          growth:"",
          growthp:"",
          totalConsideration:"",
          atRiskConsideration:"",
          guaranteed:"",
          guaranteedp:"",
          atRisk:"",
          atGrowth:"",
          threeYearRevenueGrowthOther:"",
          threeYearRevenueGrowthOtherP:"",
          threeYearEbitdaGrowth:"",
          guaranteedOther:"",
          capitalEbitda:"",
          threeYearRevenueGrowth:"",
          capitalRevenue:"",
          fcf:"",
          baseCumCF:"",
          growthCum:"",
          presynergy:"",
          postSynergy:"",
          payback:"",
          irr:"",
          integrationPeriod:"",
          executionRisk:"",
          year1:"",
          year2:"",
          year3:"",
          year4:"",
          year5:"",
          month1:"",
          month2:"",
          month3:"",
          month4:"",
          month5:"",
          month11:"",
          month12:"",
          month13:"",
          month14:"",
          month15:""
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        errors: {
          title:""
        },
      }
    },
    watch: {
      editData: {
        immediate: true,
        handler(newValue) {
          this.form = { ...newValue };
        },
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },

      validate() {
        let isValid = true;

        // Validate Title
        
        if (!this.form.title) {
          this.errors.title = 'Title is required';
          isValid = false;
        } else {
          this.errors.title = null;
        }

        return isValid;
      },

      handleSubmit() {
          if(this.validate()){
              console.log("Form submitted:", this.form);              
              this.$emit('save', this.form);
              alert("Form submitted");
              this.$emit('close');
          }
      },

      validateCurrentTab(activeTab) {
       // if(this.validate()){
       console.log(this.currentTab);
            this.currentTab = this.currentTab + 1 ;
        //}
      },

      previousTab(){
      console.log(this.currentTab);
        this.currentTab = this.currentTab - 1 
      }
    },
  };
</script>

<style scoped>
.bg-blue-900{
background-color:#0a2368
}
  .half-underline {
      position: relative;
    }

    .half-underline::after {
      content: '';
      position: absolute;
      bottom: -8px; /* Adjust underline position */
      left: 44%; /* Start the underline at 25% of the text width */
      width: 10%; /* Span 50% of the text width */
      height: 3px; /* Thickness of the underline */
      background-color: #dc2626;
       /* Use text color for the underline */
    }
</style>