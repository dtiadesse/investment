<template>
<div>
    <div class="flex justify-between items-center">
        <div class="text-2xl font-bold p-5">Investment Assessment Criteria</div>
        <div class="flex items-center mr-5" v-if="!isEditing">
            <div class="px-2 py-1 mr-5 font-bold flex items-center border-2 text-black text-center rounded"  :class="overallStatusClass" role="button">
              <p class="pr-3">Overall Status</p>
              <p class="w-2 h-2 rounded-full mr-2" :class="overallStatusDot"></p>
              <p>{{OverallStatus}}</p>
            </div>
            <button
              class="mr-5 text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-2 py-1 me-2"
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
        <div class="flex items-center mr-5" v-else>
            <div class="px-2 py-1 mr-2 font-bold flex items-center text-black text-center"  role="button">
              <p class="pr-3">Overall Status</p>
              <select
              v-model="OverallStatus"
              class="w-52 px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <option value="Active/Green">Active/Green</option>
            <option value="/Amber">/Amber</option>
            <option value="High Risk / red">High Risk / red</option>
            <option value="Neutral/Gray">Neutral/Gray</option>
            </select>
            </div>
            <button
              class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-2 py-1 me-2"
            >
              <p class="text-base" @click="openConfirmationDialog()">Cancel</p>
            </button>  
            <button
              class="text-white flex items-center border-2 bg-blue-400 border-blue-400 font-bold rounded text-sm px-2 py-1 me-2"
            >
              <p class="text-base" @click="openConfirmationDialog()">Save Changes</p>
            </button>         
        </div>

      </div>
      
      <div class="flex py-2 px-4">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50">
              <th class="w-64">Criterion</th>
              <th class="w-32">Initial Score</th>
              <th class="w-40">Current Score</th>
              <th class="w-48">Status</th>
              <th>Risks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tableValue" :key="index"  :class="index%2!=0?'bg-gray-50':''">
              <td>
                <div v-if="!isEditing">
                  {{item.BusinessIntegration}}
                </div>
                <div v-else>
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
              </td>
              <td>
                <div v-if="!isEditing">
                  {{item.InitialScore}}
                </div>
                <div v-else>
                  <input
                    type="text"
                    v-model="item.InitialScore"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </td>
              <td>
                <div v-if="!isEditing" class="flex items-center text-bold" :class="(item.Status === 'Active/Green')?'text-green-500':(item.Status === '/Amber')?'text-red-500':(item.Status === 'High Risk / red')?'text-red-500':(item.Status === 'Neutral/Gray')?'text-gray-500':''">
                  {{item.CurrentScore}} 
                  <span class="ml-2  text-bold" v-if="item.Status ==='Active/Green'"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-5 h-5">
                      <path d="M12 21c-.41 0-.75-.34-.75-.75V4.81L5.78 10.28a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 0 1-1.06 1.06L12.75 4.81v15.44c0 .41-.34.75-.75.75z" />
                    </svg>
                  </span>
                  <span class="ml-2 text-bold" v-else-if="item.Status ==='High Risk / red' || item.Status ==='/Amber'">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-5 h-5">
                      <path d="M12 3c.41 0 .75.34.75.75v15.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0L5.72 14.53a.75.75 0 0 1 1.06-1.06l5.47 5.47V3.75c0-.41.34-.75.75-.75z" />
                    </svg>
                  </span>
                  <span v-else>
                    {{'' }} 
                  </span>
                </div>
                <div v-else>
                  <input
                    type="text"
                    v-model="item.CurrentScore"
                    class="w-32 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>          
              </td>
              <td>
                <div v-if="!isEditing" class="flex items-center mr-4">
                  <p class="w-2 h-2 rounded-full mr-2" :class="(item.Status === 'Active/Green')?'bg-green-500':(item.Status === '/Amber')?'bg-yellow-500':(item.Status === 'High Risk / red')?'bg-red-500':(item.Status === 'Neutral/Gray')?'bg-gray-500':''"></p>
                  <p>{{item.Status}}</p>
                </div>
                <div v-else>
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
              </td>
              <td>
                <div v-if="!isEditing && !isExpanded" >
                  {{item.Risks.substring(0, 160)}} {{'...'}}
                </div>
                <div v-if="isEditing && !isExpanded">
                <textarea
                  v-model="item.Risks"
                  class="w-screen px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >{{item.Risks}}</textarea>
                </div>
                <div v-if="isExpanded" >
                  {{item.Risks}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex py-2 px-4 justify-end pr-5 mb-4 margin">
        <button @click="toggleExpand" class="buttonExpand">    
          Expand Full List Of Risks  {{ isExpanded ? '  ▲' : '  ▼' }}
        </button>
        <div v-if="isEditing" class="ml-4 flex items-center">
        <button
              class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="openConfirmationDialog()">Cancel</p>
            </button>  
            <button
              class="text-white flex items-center border-2 bg-blue-400 border-blue-400 font-bold rounded text-sm px-4 py-2 me-2"
            >
              <p class="text-base" @click="openConfirmationDialog()">Save Changes</p>
            </button>
            </div>
      </div>
       <!-- Save Changes Confirmation Modal -->
    <SaveChangesConfirmation
      :message="'You made changes to this page. Do you want to save them before leaving?'"
      :isVisible="isModalVisible"
      @confirm="saveEditTable"
      @cancel="closeConfirmationDialog"
    />
    </div>
</template>

<script>
import SaveChangesConfirmation from '~/components/SaveChangesConfirmation.vue';
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
      isExpanded: false,
      initialVisibleCount: 3,
      isEditing:false,
      isModalVisible:false,
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
    overallStatusClass() {
      return {
        'border-green-600 bg-green-50': this.OverallStatus === 'Active/Green',
        'border-yellow-600 bg-yellow-50': this.OverallStatus === '/Amber',
        'border-red-600 bg-red-50': this.OverallStatus === 'High Risk / red',
        'border-gray-600 bg-gray-50': this.OverallStatus === 'Neutral/Gray',
      };
    },
    overallStatusDot() {
      return {
        'bg-green-500': this.OverallStatus === 'Active/Green',
        'bg-yellow-500': this.OverallStatus === '/Amber',
        'bg-red-500': this.OverallStatus === 'High Risk / red',
        'bg-gray-500': this.OverallStatus === 'Neutral/Gray',
      };
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
      const tableData = this.tableValue.concat(this.hiddenItems);
      console.log(tableData);
      this.isEditing = false; // Exit editing mode
      this.isModalVisible = false;
    },
    cancelEdit(){
      this.isEditing = false;
    },
    openConfirmationDialog () {
      this.isModalVisible = true;
    },
    closeConfirmationDialog () {
      this.isModalVisible = false;
      this.isEditing = !this.isEditing
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
.margin{
  margin-right:18%;
}
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
  padding: 12px;
  padding-left: 25px;
  color:#0f0d0dc7
}
th span {
  margin-left: 4px;
}
td {
  padding: 6px;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  padding-left: 25px;
  
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px; 
  margin-bottom:10px;
}
button {
  cursor: pointer;
   font-weight:500;
}
button.active {
  font-weight: bold;
  background-color: blue;
  color:#fff;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
   background-color:#fff;
}
.nextButton{
  background-color:#ddd6;
  font-weight:500;
   border-radius:5px;
}
.noButton{
  background-color:#fff;
   border-radius:5px;
   font-weight:500;
}
</style>