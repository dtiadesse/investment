<template>
<div class="p-4 bg-gray-50 min-h-screen">
  <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div style="display: inline-block; width: 100%">
          <div class="px-7 py-6 investment float-left">All Investments</div>
          <div class="py-5 pr-4  float-left">
            <button  @click="goToAddInvestment" class="text-white flex addItem font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2">
              <svg
                class="h-6 w-6 text-white-700"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-base">Add New</p>
            </button>
          </div>
          <div class="search-container float-right m-6">
           
            <input
              type="text"
              id="filter-text-box"
              v-model="searchValue"
              placeholder="Start searching for investment..."
              @input="onQuickFilterChanged"
              class="border p-1 border-gray-400 w-full rounded search-input"
            />
             <svg
  class="search-icon"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="16"
  height="16"
>
  <path
    d="M10 2a8 8 0 105.3 14.3l4.6 4.6 1.4-1.4-4.6-4.6A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
  ></path>
</svg>
          </div>
        </div>
        
        <div class="p-6 pt-0">
      <ag-grid-vue
        :rowData="rowData"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :groupDisplayType="'groupRows'"
        :pagination="true"
        :paginationPageSize="pageSize"
        :frameworkComponents="frameworkComponents"
        :domLayout="'autoHeight'"
        :icons="customIcons"
        @grid-ready="onGridReady"
      ></ag-grid-vue>
      </div>
    <!-- Popup Menu -->
    <div
      v-if="showMenu"
      :style="{ top: menuPosition.top + 'px', left: menuPosition.left + 'px' }"
      class="popup-menu"
    >
      <button @click="onEdit">Edit</button>
      <button @click="openConfirmationDialog">Delete</button>
    </div>
    <!-- Delete Confirmation Modal -->
    <DeleteConfirmation
      :message="'You made changes to this page. Do you want to save them before leaving?'"
      :isVisible="isModalVisible"
      @confirm="onDelete"
      @cancel="closeConfirmationDialog"
    />
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelApiModule ,ModuleRegistry,ColumnAutoSizeModule , ClientSideRowModelModule,TextFilterModule,NumberFilterModule,DateFilterModule,CustomFilterModule,QuickFilterModule,ExternalFilterModule } from 'ag-grid-community'; 
import { useRouter } from 'vue-router'
import DeleteConfirmation from '~/components/DeleteConfirmation.vue';

ModuleRegistry.registerModules(
[ClientSideRowModelModule, 
ClientSideRowModelApiModule ,
TextFilterModule, 
NumberFilterModule, 
DateFilterModule,
CustomFilterModule,
QuickFilterModule,
ColumnAutoSizeModule ]);
 
export default defineComponent({
  name: "FilterGrid",
  components: { AgGridVue },
  setup() {
    const gridApi = shallowRef(null);
    const filterType = ref("all");
    const searchValue = ref("");
    const pageSize = ref(5); // Number of rows per page
    const currentPage = ref(0);
    const totalPages = ref(0);
    const router = useRouter()

// Method to navigate to the Home page

    const rowData = ref([
      { 
       Id:1,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Positive/Green", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:2,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Positive/Green", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:3,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Positive/Green", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:4,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Positive/Green", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:5,
       InvestmentName: "Cynthia Ng-Individual-Recruiting", 
       InvestmentType: "Services", 
       TotalConsideration: 10, 
       Status: "StatusName/Yellow", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:6,
       InvestmentName: "Cynthia Ng-Individual-Recruiting", 
       InvestmentType: "Services", 
       TotalConsideration: 10, 
       Status: "StatusName/Yellow", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:7,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "High Risk/Red", 
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:8,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "High Risk/Red",
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:9,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "High Risk/Red",
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:10,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Neutral/Gray",
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
      { 
       Id:11,
       InvestmentName: "Progress Capital-Team-Recruiting", 
       InvestmentType: "Advisory", 
       TotalConsideration: 10, 
       Status: "Neutral/Gray",
       Initial: 4.8, 
       LatestRevised: 5.1, 
       Revenue: 1.6, 
      },
    ]);

    const columnDefs = ref([    
    {
      headerName: "",
      children: [
        {
            headerName: "",
            filter: false,
            sortable: false,
            width: 40,
            cellRenderer: (params) => {
                // Create a container div for the three dots
                const container = document.createElement("div");
                container.style.cursor = "pointer";

                // Create three dots icon (ellipsis)
                const dots = document.createElement("span");
                dots.innerText = "⋮"; // Unicode for the three dots
                dots.style.fontSize = "20px";
                dots.style.color = "rgb(5 18 34)"; // Change the color of the dots
                dots.style.marginLeft = "5px";

                // Event listener to show the popup menu when dots are clicked
                dots.addEventListener("click", (event) => {
                  openMenu(event, params.node);
                });

                // Append the dots to the container div
                container.appendChild(dots);
                return container;
          },
        },
        { 
          field: "InvestmentName", 
          headerName: "Investment Name", 
          floatingFilter: true,
          sortable: true,          
          sort: "asc", 
          width:260,
          cellRenderer: (params) => {
            // Create a link with a custom class
            const link = `<a href="home/${params.data.Id}" class="bold-cell">${params.value}</a>`;
            return link;
          },
        },
        { 
          field: "InvestmentType", 
          headerName: "Investment Type",
          floatingFilter: true,
          sortable: true,
          sort: "asc",
        },
        { 
          field: "TotalConsideration", 
          headerName: "Total Consideration", 
          filter: true,
          floatingFilter: true, 
          sortable: true,
          sort: "asc",
        },
        { 
          field: "Status", 
          headerName: "Status", 
          filter: true,
          floatingFilter: true,
          sortable: true,
          sort: "asc",
          cellRenderer: (params) => {
            // Custom div content
            const p1 = document.createElement("p");   
            const p2 = document.createElement("p");           
            if (params.value === "Positive/Green") {
              p1.className = "w-2 h-2 rounded-full mr-2 bg-green-500";
              p2.innerText = "Positive/Green";
            } else if (params.value === "StatusName/Yellow") {
              p1.className = "w-2 h-2 rounded-full mr-2 bg-yellow-500";
              p2.innerText = "StatusName/Yellow"
            } else if (params.value === "High Risk/Red") {
              p1.className = "w-2 h-2 rounded-full mr-2 bg-red-500";
              p2.innerText = "High Risk/Red"
            } else if (params.value === "Neutral/Gray") {
              p1.className = "w-2 h-2 rounded-full mr-2 bg-gray-500";
              p2.innerText = "Neutral/Gray"
            }
            const div = document.createElement("div");
            div.className = "flex items-center"
            div.appendChild(p1);
            div.appendChild(p2);
            return div;
          },
        },
      ],
    },
    {
      headerName: "Post-EBITDA",
      children: [
        { 
          field: "Initial", 
          headerName: "Initial", 
          filter: "agNumberColumnFilter",
          floatingFilter: true,
          sortable: true,
          sort: "asc",
        },
        { 
          field: "LatestRevised", 
          headerName: "Latest Revised", 
          filter: "agNumberColumnFilter",
          floatingFilter: true,
          sortable: true,
          sort: "asc",
        },
      ],
    },
    {
      headerName: "",
      children: [
        { 
          field: "Revenue", 
          headerName: "Revenue",
          filter: "agNumberColumnFilter",
          floatingFilter: true, 
          sortable: true,
        },
      ],
    },
    ]);

    const defaultColDef = ref({
      filter: true,
      resizable: true,
      sortable: true, // Enable sorting for all columns
      alwaysShowSortIcon: true,
      headerComponentParams: {
        alwaysShowSortIcon: true, // Always show sort icon
      },
    });

    // Menu visibility and position
const showMenu = ref(false);
const menuPosition = ref({ top: 0, left: 0 });

// Row to edit or delete
const rowToEdit = ref(null);
const rowToDelete = ref(null);

// Open the popup menu at the clicked position
const openMenu = (event, row) => {
  event.stopPropagation(); // Prevent grid events from triggering
  rowToEdit.value = row;
  rowToDelete.value = row;
  menuPosition.value = { top: event.clientY, left: event.clientX };
  showMenu.value = true;
};

// Close the menu
const closeMenu = () => {
  showMenu.value = false;
};

// Edit the row
const onEdit = () => {
  closeMenu();
};

// Delete the row
const onDelete = () => {
  console.log("Deleting row", rowData.value,rowToDelete.value.id);
  const index = rowData.value.findIndex((row) => parseInt(row.Id) === parseInt(rowToDelete.value.id));
  console.log(index)
  if (index > -1) {
    rowData.value.splice(index, 1);
  }
  console.log("Deleting row", rowData.value);
  gridApi.value?.applyTransaction({ update: [rowData.value] });
  closeMenu();
  closeConfirmationDialog();
};

    const onGridReady = (params) => {
      gridApi.value = params.api  // Assign the API here
    };

    const onQuickFilterChanged = () => {
      gridApi.value!.setGridOption(
        "quickFilterText",
        (document.getElementById("filter-text-box") as HTMLInputElement).value,
      );
    };
    
    // Pagination Controls
    const onPreviousPage = () => {
      if (currentPage.value > 0) {
        currentPage.value--;
        updatePage();
      }
    };

    const onNextPage = () => {
      if (currentPage.value < totalPages.value - 1) {
        currentPage.value++;
        updatePage();
      }
    };

    const updatePage = () => {
      const gridApi = gridApi.value.api;
      gridApi.paginationGoToPage(currentPage.value);
    };

    
    const goToAddInvestment = () => {
      router.push('/investment/add');
    }

    // Custom filter icon (using an SVG icon for example)
    const customIcons = {
      filter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16"><path d="M11 0H5a1 1 0 0 0-1 1v8.28a1 1 0 0 0 .293.707l1.657 1.657V15a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.353l1.657-1.657A1 1 0 0 0 12 8.28V1a1 1 0 0 0-1-1zM6 9V2h4v7H6z"/></svg>',
    };

    const isModalVisible = ref(false);
    const itemToDelete = ref(null);

    const openConfirmationDialog = (item) => {
      itemToDelete.value = item;
      isModalVisible.value = true;
      closeMenu();
    };

    const closeConfirmationDialog = () => {
      isModalVisible.value = false;
      itemToDelete.value = null;
    };

    return {
      gridApi,
      rowData,
      columnDefs,
      defaultColDef,
      pageSize,
      currentPage,
      totalPages,
      onGridReady,
      onPreviousPage,
      onNextPage,
      onGridReady,
      onQuickFilterChanged,
      goToAddInvestment,
      openMenu,
      showMenu,
      menuPosition,
      closeMenu,
      onDelete,
      onEdit,
      rowToDelete,
      rowToEdit,
      isModalVisible,
      itemToDelete,
      openConfirmationDialog,
      closeConfirmationDialog
     // customIcons
    };
  },
});
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  width: 25%;
}

.search-icon {
  position: absolute;
  right: 10px; /* Position the icon at the right of the input */
  top: 50%;
  transform: translateY(-50%);
  fill: gray;
}

/* Search Input */
.search-input {
  padding: 8px 10px 8px 8px; /* Adjust padding for the icon */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.search-input:focus {
  border-color: #0078d7;
  box-shadow: 0 0 3px rgba(0, 120, 215, 0.5);
}
.addItem {
  background-color: rgb(10 35 104);
}

.popup-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
  z-index: 1000;
}

.popup-menu button {
  width: 100%;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

.popup-menu button:hover {
  background-color: #f1f1f1;
}

</style>
