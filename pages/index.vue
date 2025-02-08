<template>
  <div class="bg-white border border-gray-200 rounded">
    <div style="display: inline-block; width: 100%">
      <div class="px-7 py-6 investment float-left title">All Investments</div>
      <div class="py-5 pr-4 float-left">
        <button @click="goToAddInvestment"
          class="text-white flex addItem font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2">
          <svg class="h-6 w-6 text-white-700" width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <p class="text-base">Add New</p>
        </button>
      </div>
      <div class="search-container float-right m-6">
        <input type="text" id="filter-text-box" v-model="searchValue" placeholder="Start searching for investment..."
          @input="onQuickFilterChanged" class="border p-1 border-gray-400 w-full rounded search-input" />
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path d="M10 2a8 8 0 105.3 14.3l4.6 4.6 1.4-1.4-4.6-4.6A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"></path>
        </svg>
      </div>
    </div>

    <div class="px-6">
      <div v-if="isLoading" class="loading-spinner">Loading investments...</div>
      <div v-if="fetchError" class="error-message">Error: {{ fetchError }}</div>
      <ag-grid-vue v-else :rowData="rowData" :columnDefs="columnDefs" :defaultColDef="defaultColDef" :pagination="true"
        :paginationPageSize="pageSize" :groupDisplayType="'groupRows'" :domLayout="'autoHeight'"
        @grid-ready="onGridReady"></ag-grid-vue>
    </div>

    <!-- Popup Menu -->
    <div v-if="showMenu" :style="{ top: menuPosition.top + 'px', left: menuPosition.left + 'px' }" class="popup-menu">
      <button @click="onEdit">Edit</button>
      <button @click="openConfirmationDialog">Delete</button>
    </div>

    <!-- Delete Confirmation Modal -->
    <DeleteConfirmation
      :isVisible="isModalVisible" 
      @confirm="onDelete()" 
      @cancel="closeConfirmationDialog()" />
  </div>
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue3";
import { CustomFilterModule, DateFilterModule, ModuleRegistry, NumberFilterModule, QuickFilterModule, TextFilterModule } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community"; // Import the required module
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ColumnsToolPanelModule, MenuModule } from "ag-grid-enterprise";

// Register the module
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule,
  ColumnsToolPanelModule,

  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  CustomFilterModule,
  QuickFilterModule,

]);

export default {
  name: "DynamicGrid",
  components: { AgGridVue },
  setup() {
    const router = useRouter();

    const gridApi: any = ref(null);
    const isLoading = ref(false);
    const fetchError = ref(null);
    const rowData = ref([]);
    const columnDefs: any = ref([]);
    const searchValue = ref(""); // Define searchValue
    const defaultColDef = ref({
      filter: true,
      resizable: true,
      sortable: true,
      floatingFilter: true, // Enable floating filters globally
    });
    const pageSize = ref(10);

    const showMenu = ref(false);
    const menuPosition = ref({ top: 0, left: 0 });
    const rowToEdit: any = ref(null);
    const rowToDelete: any = ref(null);
    const isModalVisible = ref(false);
    // Fetch investments and dynamically generate columnDefs
    const fetchInvestments = async () => {
      isLoading.value = true;
      fetchError.value = null;

      try {
        const response = await fetch("http://localhost:3001/investments");
        if (!response.ok) {
          throw new Error(`Error fetching investments: ${response.statusText}`);
        }
        const data = await response.json();

        data.forEach((item: any, index: number) => {
          item.id = index + 1; // Add a new property "index"
        });
        
        rowData.value = data;

        // Dynamically generate column definitions based on keys in the response
        if (data.length > 0) {

          columnDefs.value = Object.keys(data[0]).map((key) => ({
            field: key,
            headerName: key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()), // Format header
            filter: true, // Enable filters
            sortable: true,
            floatingFilter: true, // Enable floating filters
            menuTabs: ['filterMenuTab'], // Ensure the filter menu is enabled
            cellRenderer: (params: any) => {
              if (key == 'Title') {
                return `<a href="investment/${params.data.id}" class="bold-cell">${params.value}</a>`;
              } else {
                return `<span class="text-gray-500">${params.value}</span>`;
              }
            },
          }));

          // Add actions column
          columnDefs.value.unshift({
            headerName: "",
            field: "actions",
            width: 50,
            filter: false, // Enable filters
            sortable: false,
            floatingFilter: false,

            cellRenderer: (params: any) => {
              const container = document.createElement("div");
              container.style.cursor = "pointer";

              const dots = document.createElement("span");
              dots.innerText = "⋮"; // Ellipsis icon
              dots.style.fontSize = "20px";
              dots.style.color = "#333";

              dots.addEventListener("click", (event) => {
                openMenu(event, params.node);
              });

              container.appendChild(dots);
              return container;
            },
          });
        }
      } catch (err: any) {
        fetchError.value = err.message;
        console.error("Failed to fetch investments:", err);
      } finally {
        isLoading.value = false;
      }
    };

    // Search filter
    const onQuickFilterChanged = () => {
      gridApi.value?.setGridOption('quickFilterText',searchValue.value);
    };

    // Grid ready event
    const onGridReady = (params: { api: any }) => {
      gridApi.value = params.api; // Save the grid API reference
    };

    // Open the popup menu at the clicked position
    const openMenu = (event: MouseEvent, row: any) => {
      event.stopPropagation();
      rowToEdit.value = row;
      rowToDelete.value = row;
      menuPosition.value = { top: event.clientY, left: event.clientX };
      showMenu.value = !showMenu.value;      
    };

    // Close the menu
    const closeMenu = () => {
      showMenu.value = false;
    };

    // Edit action
    const onEdit = () => {
      console.log("Editing row:", rowToEdit.value.data);
      router.push("/investment/edit/"+rowToEdit.value.data.id);
      closeMenu();
    };

    // Delete action
    const onDelete = () => {
      console.log("Deleting row:", rowToDelete.value);
      const index = rowData.value.findIndex((row: any) => row === rowToDelete.value.data);
      if (index > -1) {
        rowData.value.splice(index, 1);
      }      
      closeMenu();
      isModalVisible.value = false;
    };

    const goToAddInvestment = () => {
      router.push("/investment/add");
    };

    const openConfirmationDialog = () => {
      closeMenu();
      isModalVisible.value = true;
    };

    const closeConfirmationDialog = () => {
      isModalVisible.value = false;
    };

    // Lifecycle hook to fetch data on mount
    onMounted(() => {
      fetchInvestments();
    });

    return {
      rowData,
      columnDefs,
      defaultColDef,
      searchValue,
      isLoading,
      fetchError,
      onQuickFilterChanged,
      onGridReady,
      goToAddInvestment,
      pageSize,
      showMenu,
      menuPosition,
      rowToEdit,
      rowToDelete,
      onEdit,
      onDelete,
      openMenu,
      closeMenu,
      openConfirmationDialog,
      closeConfirmationDialog,
      isModalVisible
    };
  },
};
definePageMeta({
  layout: "home",
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
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  fill: gray;
}

.search-input {
  padding: 8px 10px;
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
  background-color: #1C163F;
}

.loading-spinner {
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
}

.error-message {
  color: red;
  text-align: center;
  margin: 20px 0;
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
  text-align: left;
}

.popup-menu button:hover {
  background-color: #f1f1f1;
}
</style>
