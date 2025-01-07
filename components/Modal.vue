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
                          <label for="Title" class="block text-sm font-medium text-gray-700 mb-2">
                            Title
                          </label>
                          <input
                            id="Title"
                            type="text"
                            v-model="form.Title"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Progress Capital - Team - Recruiting"
                          />
                          <span v-if="errors.Title" class="text-red-500 text-sm">{{ errors.title }}</span>
                        </div>

                        <!-- Type Field -->
                        <div class="mb-4">
                          <label for="InvestmentType" class="block text-sm font-medium text-gray-700 mb-2">
                            Type
                          </label>
                          <select
                            id="InvestmentType"
                            v-model="form.InvestmentType"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an type</option>
                            <option v-for="(value, index) in investmentType" :key="index" :value="value">
                              {{ value }}
                            </option>
                          </select>
                        </div>

                        <!-- Investment Details Field -->
                        <div class="mb-4">
                          <label for="InvestmentDetails" class="block text-sm font-medium text-gray-700 mb-2">
                            Investment Details
                          </label>
                          <select
                            id="InvestmentDetails"
                            v-model="form.InvestmentDetails"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an Investment Details</option>
                            <option v-for="(value, index) in investmentDetails" :key="index" :value="value">
                              {{ value }}
                            </option>
                          </select>
                        </div>
                        
                        <!-- Size Field -->
                        <div class="mb-4">
                          <label for="Size" class="block text-sm font-medium text-gray-700 mb-2">
                            Size
                          </label>
                          <select
                            id="Size"
                            v-model="form.Size"
                            class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option disabled value="">Select an size</option>
                            <option v-for="(value, index) in size" :key="index" :value="value">
                              {{ value }}
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
                      <label for="BaseRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Base Revenue (value??)
                      </label>
                      <input
                        id="BaseRevenue"
                        type="text"
                        v-model="form.BaseRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Progress Capital - Team - Recruiting"
                      />
                    </div>

                    <!-- Growth Revenue Field -->
                    <div class="mb-4">
                      <label for="GrowthRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Growth Revenue
                      </label>
                      <input
                        id="GrowthRevenue"
                        type="text"
                        v-model="form.GrowthRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Progress Capital - Team - Recruiting"
                      />
                    </div>

                    <!-- Growth Field -->
                    <div class="mb-4">
                      <div class="flex">
                        <div class="mr-4">
                        <label for="Growth" class="block text-sm font-medium text-gray-700 mb-2">
                          Growth
                        </label>
                        <input
                          id="Growth"
                          type="text"
                          v-model="form.Growth"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Growth"
                        />
                        </div>
                        <div>
                        <label for="GrowthPercentage" class="block text-sm font-medium text-gray-700 mb-2">
                          Growth(%)
                        </label>
                        <input
                          id="GrowthPercentage"
                          type="text"
                          v-model="form.GrowthPercentage"
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
                      <label for="TotalConsideration" class="block text-sm font-medium text-gray-700 mb-2">
                        Total Consideration (value??)
                      </label>
                      <input
                        id="TotalConsideration"
                        type="text"
                        v-model="form.TotalConsideration"
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
                        <label for="GuaranteedAmount" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed
                        </label>
                        <input
                          id="GuaranteedAmount"
                          type="text"
                          v-model="form.GuaranteedAmount"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Guaranteed"
                        />
                        </div>
                        <div>
                        <label for="PercentageGuaranteed" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed(%)
                        </label>
                        <input
                          id="PercentageGuaranteed"
                          type="text"
                          v-model="form.PercentageGuaranteed"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="(%)Guaranteed"
                        />
                        </div>
                      </div>
                    </div>  

                    <!-- At Risk Stable Field -->
                    <div class="mb-4">
                      <label for="AtRiskAmount" class="block text-sm font-medium text-gray-700 mb-2">
                        At Risk (Stable)
                      </label>
                      <input
                        id="AtRiskAmount"
                        type="text"
                        v-model="form.AtRiskAmount"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="At Risk Stable"
                      />
                    </div>  

                    <!-- At Risk Growth Field -->
                    <div class="mb-4">
                      <label for="AtRiskGrowthAmount" class="block text-sm font-medium text-gray-700 mb-2">
                        At Risk (Growth)
                      </label>
                      <input
                        id="AtRiskGrowthAmount"
                        type="text"
                        v-model="form.AtRiskGrowthAmount"
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
                        <label for="ThreeYearRevenueGrowthValue" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR REVENUE GROWTH Value
                        </label>
                        <input
                          id="ThreeYearRevenueGrowthValue"
                          type="text"
                          v-model="form.ThreeYearRevenueGrowthValue"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="8.3"
                        />
                        </div>
                        <div>
                        <label for="ThreeYearRevenueGrowthPercentage" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR REVENUE GROWTH (%)
                        </label>
                        <input
                          id="ThreeYearRevenueGrowthPercentage"
                          type="text"
                          v-model="form.ThreeYearRevenueGrowthPercentage"
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
                        <label for="ThreeYearEBITDAGrowth" class="block text-sm font-medium text-gray-700 mb-2">
                          3 YEAR EBITDA GROWTH
                        </label>
                        <input
                          id="ThreeYearEBITDAGrowth"
                          type="text"
                          v-model="form.ThreeYearEBITDAGrowth"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="1.7"
                        />
                        </div>
                        <div class="mr-2">
                        <label for="GuaranteedAmount" class="block text-sm font-medium text-gray-700 mb-2">
                          Guaranteed
                        </label>
                        <input
                          id="GuaranteedAmount"
                          type="text"
                          v-model="form.GuaranteedAmount"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="4"
                        />
                        </div>
                        <div>
                        <label for="CapitalAsPercentageOfEBITDA" class="block text-sm font-medium text-gray-700 mb-2">
                          Capital as % of EBITDA
                        </label>
                        <input
                          id="CapitalAsPercentageOfEBITDA"
                          type="text"
                          v-model="form.CapitalAsPercentageOfEBITDA"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="2.41x"
                        />
                        </div>
                      </div>
                    </div>  
                    
                    <!-- 3 Year Revenue Growth Field -->
                    <div class="mb-4">
                      <label for="ThreeYearRevenueGrowthPercentage" class="block text-sm font-medium text-gray-700 mb-2">
                        3 Year Revenue Growth (%)
                      </label>
                      <input
                        id="ThreeYearRevenueGrowthPercentage"
                        type="text"
                        v-model="form.ThreeYearRevenueGrowthPercentage"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.32%"
                      />
                    </div>

                    <!-- Capital as % of Revenue Field -->
                    <div class="mb-4">
                      <label for="CapitalAsPercentageOfRevenue" class="block text-sm font-medium text-gray-700 mb-2">
                        Capital as % of Revenue
                      </label>
                      <input
                        id="CapitalAsPercentageOfRevenue"
                        type="text"
                        v-model="form.CapitalAsPercentageOfRevenue"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.48x"
                      />
                    </div>
                    
                    <!-- FCF Field -->
                    <div class="mb-4">
                      <label for="FreeCashFlow" class="block text-sm font-medium text-gray-700 mb-2">
                        FCF (%)
                      </label>
                      <input
                        id="FreeCashFlow"
                        type="text"
                        v-model="form.FreeCashFlow"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="1.6"
                      />
                    </div>

                    <!-- Base Cum Field -->
                    <div class="mb-4">
                      <label for="BaseCumulativeCashFlow" class="block text-sm font-medium text-gray-700 mb-2">
                        Base Cum. CF
                      </label>
                      <input
                        id="BaseCumulativeCashFlow"
                        type="text"
                        v-model="form.BaseCumulativeCashFlow"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.7%"
                      />
                    </div>
                    
                    <!-- Growth Cum. Field -->
                    <div class="mb-4">
                      <label for="GrowthCumulativeCashFlow" class="block text-sm font-medium text-gray-700 mb-2">
                      Growth Cum.
                      </label>
                      <input
                        id="GrowthCumulativeCashFlow"
                        type="text"
                        v-model="form.GrowthCumulativeCashFlow"
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
                        <label for="PreSynergyMultiple" class="block text-sm font-medium text-gray-700 mb-2">
                          Pre-Synergry Multiple (x)
                        </label>
                        <input
                          id="PreSynergyMultiple"
                          type="text"
                          v-model="form.PreSynergyMultiple"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="3.36"
                        />
                        </div>
                        <div>
                        <label for="PostSynergyMultiple" class="block text-sm font-medium text-gray-700 mb-2">
                          Post-Synergry Multiple (x)
                        </label>
                        <input
                          id="PostSynergyMultiple"
                          type="text"
                          v-model="form.PostSynergyMultiple"
                          class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="8.756"
                        />
                        </div>
                      </div>
                    </div> 

                    <!-- Payback Field -->
                    <div class="mb-4">
                      <label for="Payback" class="block text-sm font-medium text-gray-700 mb-2">
                        Payback (yrs)
                      </label>
                      <input
                        id="Payback"
                        type="text"
                        v-model="form.Payback"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="4.0"
                      />
                    </div>

                    <!-- IRR Field -->
                    <div class="mb-4">
                      <label for="InternalRateofReturn" class="block text-sm font-medium text-gray-700 mb-2">
                        IRR (%)
                      </label>
                      <input
                        id="InternalRateofReturn"
                        type="text"
                        v-model="form.InternalRateofReturn"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="19.70"
                      />
                    </div>

                    <!-- Integration Period Field -->
                    <div class="mb-4">
                      <label for="IntegrationPeriod" class="block text-sm font-medium text-gray-700 mb-2">
                        Integration Period (value??/month??)
                      </label>
                      <input
                        id="IntegrationPeriod"
                        type="text"
                        v-model="form.IntegrationPeriod"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="84"
                      />
                    </div>

                    <!-- Execution Risk Field -->
                    <div class="mb-4">
                      <label for="ExecutionRisk" class="block text-sm font-medium text-gray-700 mb-2">
                        Execution Risk
                      </label>
                      <select
                        id="ExecutionRisk"
                        v-model="form.ExecutionRisk"
                        class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option disabled value="">Select an Execution Risk</option>
                        <option v-for="(option, index) in executionRisk" :key="index" :value="option">
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
        investmentType: ["ADS Investment","SS Investment"],
        investmentDetails: ["RECRUITING", "M&A-SERVICES", "M&A-ADVISORY", "M&A-Services","Platform Investments"],
        size: ["M&A - > $15M","M&A - < $15M", "Platform - > $3M", "Platform - $1M - $3M", "R&R - < $1M rev","R&R - $1M - $5M rev","R&R - >$5M Rev"],
        executionRisk:["Low", "MEDIUM", "High"],
        errors: {
          Title:""
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
        
        if (!this.form.Title) {
          this.errors.Title = 'Title is required';
          isValid = false;
        } else {
          this.errors.Title = null;
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