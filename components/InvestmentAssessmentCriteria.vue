<template>
    <div class="flex justify-between items-center">
        <div class="text-2xl font-bold p-4">Investment Assessment Criteria</div>
        <div class="flex items-center">
            <div class="px-4 py-2 mr-2 font-bold flex items-center border-2 border-green-600 bg-green-50 text-black text-center rounded"  role="button">
              <p class="pr-3">Overall Status</p>
              <p class="w-2 h-2 bg-green-500 rounded-full mr-2"></p>
              <p>Active/Green</p>
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
              <p class="text-base">Edit Table</p>
            </button>         
        </div>

      </div>
      <div class="flex py-2 px-4 border-b"  v-for="item in tableValue">
        <div class="w-60 flex items-center">{{item.BusinessIntegration}}</div>
        <div class="w-1/4 flex items-center"><p class="w-2 h-2 bg-green-500 rounded-full mr-2"></p><p>{{item.Status}}</p></div>
        <div class="w-2/3 flex items-center">
          <ul class="list-disc pl-6">
            <li>
              {{item.Risks}}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex py-2 px-4 border-b"  v-for="item in hiddenItems"  v-if="isExpanded">
        <div class="w-60 flex items-center">{{item.BusinessIntegration}}</div>
        <div class="w-1/4 flex items-center"><p class="w-2 h-2 bg-green-500 rounded-full mr-2"></p><p>{{item.Status}}</p></div>
        <div class="w-2/3 flex items-center">
          <ul class="list-disc pl-6">
            <li>
              {{item.Risks}}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex py-2 px-4 justify-center">
        <button @click="toggleExpand" class="buttonExpand">    
          Expand Full List Of Risks  {{ isExpanded ? '▲' : '▼' }}
        </button>
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
      // Full list of items
      items: [
            {
              "BusinessIntegration":"Business Integration / Implementation",
              "Status":"Active/Green",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Functional Integration / Implementation",
              "Status":"/Amber",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Financial Impact",
              "Status":"Active/Green",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Financial Returns",
              "Status":"High Risk / red",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Risk /Return",
              "Status":"Neutral/Gray",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              "BusinessIntegration":"Leadership",
              "Status":"Active/Green",
              "Risks":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ],
      // Track expanded state
      isExpanded: false,
      // Number of items to show initially
      initialVisibleCount: 3,
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
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  }
};

</script>

<style>
.buttonExpand {
  cursor: pointer;
  color:blue
}
</style>