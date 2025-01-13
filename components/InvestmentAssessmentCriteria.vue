<template>
    <div class="flex justify-between items-center">
        <div class="text-2xl font-bold p-4">Investment Assessment Criteria</div>
        <div class="flex items-center" v-if="!isEditing">
            <div class="px-4 py-2 mr-2 font-bold flex items-center border-2 text-black text-center rounded"  :class="(OverallStatus === 'Active/Green')?'border-green-600 bg-green-50':(OverallStatus === '/Amber')?'border-yellow-600 bg-yellow-50':(OverallStatus === 'High Risk / red')?'border-red-600 bg-red-50':(OverallStatus === 'Neutral/Gray')?'border-gray-600 bg-gray-50':' '" role="button">
              <p class="pr-3">Overall Status</p>
              <p class="w-2 h-2 rounded-full mr-2" :class="(OverallStatus === 'Active/Green')?'bg-green-500':(OverallStatus === '/Amber')?'bg-yellow-500':(OverallStatus === 'High Risk / red')?'bg-red-500':(OverallStatus === 'Neutral/Gray')?'bg-gray-500':''"></p>
              <p>{{OverallStatus}}</p>
            </div>
            <button
              class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 me-2"
            >
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
              <p class="text-base" @click="editTable()">Edit Table</p>
            </button>         
        </div>
        <div class="flex items-center" v-else>
            <div class="px-4 py-2 mr-2 font-bold flex items-center text-black text-center"  role="button">
              <p class="pr-3">Overall Status</p>
              <select
              v-model="OverallStatus"
              class="w-52 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Active/Green">Active/Green</option>
            <option value="/Amber">/Amber</option>
            <option value="High Risk / red">High Risk / red</option>
            <option value="Neutral/Gray">Neutral/Gray</option>
            </select>
            </div>
            <button
              class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="cancelEdit()">Cancel</p>
            </button>  
            <button
              class="text-white flex items-center border-2 bg-blue-400 border-blue-400 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="saveEditTable()">Save Changes</p>
            </button>         
        </div>

      </div>
      <div class="flex py-2 px-4 border-b"  v-for="item in tableValue">
          <div v-if="!isEditing" class="w-72 flex items-center mr-4">
            {{item.BusinessIntegration}}
          </div>
          <div v-else class="w-72 flex items-center mr-4">
            <select
              v-model="item.BusinessIntegration"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Leadership">Leadership</option>
            <option value="Risk /Return">Risk /Return</option>
            <option value="Financial Returns">Financial Returns</option>
            <option value="Financial Impact">Financial Impact</option>
            <option value="Functional Integration / Implementation">Functional Integration / Implementation</option>
            <option value="Business Integration / Implementation">Business Integration / Implementation</option>
            </select>
          </div>
          <div v-if="!isEditing"  class="w-60 flex items-center mr-4">
            {{item.InitialScore}}
          </div>
          <div v-else  class="w-60 flex items-center mr-4">
            <input
              type="text"
              v-model="item.InitialScore"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div v-if="!isEditing" class="w-60 flex items-center mr-4" :class="(item.Status === 'Active/Green')?'text-green-500':(item.Status === '/Amber')?'text-red-500':(item.Status === 'High Risk / red')?'text-red-500':(item.Status === 'Neutral/Gray')?'text-gray-500':''">
            {{item.CurrentScore}} 
            <span v-if="item.Status ==='Active/Green'"> {{'↑'}} 
            </span>
            <span v-else-if="item.Status ==='High Risk / red' || item.Status ==='/Amber'">
             {{'↓' }} 
             </span>
             <span v-else>
              {{'' }} 
             </span>
          </div>
          <div v-else class="w-60 flex items-center mr-4">
            <input
              type="text"
              v-model="item.CurrentScore"
              class="w-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div v-if="!isEditing"  class="w-60 flex items-center mr-4">
            <p class="w-2 h-2 rounded-full mr-2" :class="(item.Status === 'Active/Green')?'bg-green-500':(item.Status === '/Amber')?'bg-yellow-500':(item.Status === 'High Risk / red')?'bg-red-500':(item.Status === 'Neutral/Gray')?'bg-gray-500':''"></p>
            <p>{{item.Status}}</p>
          </div>
          <div v-else  class="w-60 flex items-center mr-4">
            <select
              v-model="item.Status"
              class="w-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Active/Green">Active/Green</option>
            <option value="/Amber">/Amber</option>
            <option value="High Risk / red">High Risk / red</option>
            <option value="Neutral/Gray">Neutral/Gray</option>
            </select>
          </div>
            <div v-if="!isEditing"  class="w-2/3 flex items-center">
              {{item.Risks}}
            </div>
            <div v-else  class="w-2/3 flex items-center">
            <textarea
              v-model="item.Risks"
              class="w-screen px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >{{item.Risks}}</textarea>
            </div>
      </div>
      <div class="flex py-2 px-4 border-b"  v-for="item in hiddenItems"  v-if="isExpanded">
          <div v-if="!isEditing" class="w-72 flex items-center mr-4">
            {{item.BusinessIntegration}}
          </div>
          <div v-else class="w-72 flex items-center mr-4">
            <select
              v-model="item.BusinessIntegration"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Leadership">Leadership</option>
            <option value="Risk /Return">Risk /Return</option>
            <option value="Financial Returns">Financial Returns</option>
            <option value="Financial Impact">Financial Impact</option>
            <option value="Functional Integration / Implementation">Functional Integration / Implementation</option>
            <option value="Business Integration / Implementation">Business Integration / Implementation</option>
            </select>
          </div>
          <div v-if="!isEditing"  class="w-60 flex items-center mr-4">
            {{item.InitialScore}}
          </div>
          <div v-else  class="w-60 flex items-center mr-4">
            <input
              type="text"
              v-model="item.InitialScore"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div v-if="!isEditing" class="w-60 flex items-center mr-4" :class="(item.Status === 'Active/Green')?'text-green-500':(item.Status === '/Amber')?'text-red-500':(item.Status === 'High Risk / red')?'text-red-500':(item.Status === 'Neutral/Gray')?'text-gray-500':''">
            {{item.CurrentScore}} 
            <span v-if="item.Status ==='Active/Green'"> {{'↑'}} 
            </span>
            <span v-else-if="item.Status ==='High Risk / red' || item.Status ==='/Amber'">
             {{'↓' }} 
             </span>
             <span v-else>
              {{'' }} 
             </span>
          </div>
          <div v-else class="w-60 flex items-center mr-4">
            <input
              type="text"
              v-model="item.CurrentScore"
              class="w-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div v-if="!isEditing"  class="w-60 flex items-center mr-4">
            <p class="w-2 h-2 rounded-full mr-2" :class="(item.Status === 'Active/Green')?'bg-green-500':(item.Status === '/Amber')?'bg-yellow-500':(item.Status === 'High Risk / red')?'bg-red-500':(item.Status === 'Neutral/Gray')?'bg-gray-500':''"></p>
            <p>{{item.Status}}</p>
          </div>
          <div v-else  class="w-60 flex items-center mr-4">
            <select
              v-model="item.Status"
              class="w-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Active/Green">Active/Green</option>
            <option value="/Amber">/Amber</option>
            <option value="High Risk / red">High Risk / red</option>
            <option value="Neutral/Gray">Neutral/Gray</option>
            </select>
          </div>
            <div v-if="!isEditing"  class="w-2/3 flex items-center">
              {{item.Risks}}
            </div>
            <div v-else  class="w-2/3 flex items-center">
            <textarea
              v-model="item.Risks"
              class="w-screen px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >{{item.Risks}}</textarea>
            </div>
      </div>
      <div class="flex py-2 px-4 justify-end">
        <button @click="toggleExpand" class="buttonExpand">    
          Expand Full List Of Risks  {{ isExpanded ? '▲' : '▼' }}
        </button>
        <div v-if="isEditing" class="ml-4 flex items-center">
        <button
              class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="cancelEdit()">Cancel</p>
            </button>  
            <button
              class="text-white flex items-center border-2 bg-blue-400 border-blue-400 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="saveEditTable()">Save Changes</p>
            </button>
            </div>
      </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      OverallStatus:'Active/Green',
      // Full list of items
      items: [
            {
              "BusinessIntegration":"Business Integration / Implementation",
              "Status":"Active/Green",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Functional Integration / Implementation",
              "Status":"/Amber",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Financial Impact",
              "Status":"Active/Green",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Financial Returns",
              "Status":"High Risk / red",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Risk /Return",
              "Status":"Neutral/Gray",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Leadership",
              "Status":"Active/Green",
              "InitialScore":"2.44",
              "CurrentScore":"2.22",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ],
      // Track expanded state
      isExpanded: false,
      // Number of items to show initially
      initialVisibleCount: 3,
      isEditing:false,
    };
  },
  computed: {
    tableValue() {
      return this.tableData;
    },
    // Dynamically calculate the visible items
    visibleItems() {
      return this.items.slice(0, this.initialVisibleCount);
    },
    // Dynamically calculate the hidden items
    hiddenItems() {
      return this.items.slice(this.initialVisibleCount);
    },
  },

  methods:{
    editTable(){
      this.isEditing = !this.isEditing
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    
    // Save the edit
    saveEditTable() {
      this.isEditing = false; // Exit editing mode
    },
    cancelEdit(){
      this.isEditing = false;
    }
  }
};

</script>

<style scoped>
.buttonExpand {
  cursor: pointer;
  color:blue
}
.w-screen{
  width:40vw
}
</style>