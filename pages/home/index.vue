<template>
  <div class="container mx-auto px-4">
    <div class="grid gap-4 grid-cols-2">
      <div
        class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <p class="prepostsynergy">Pre and Post Synergry</p>
        <InvChart
          :seriesLabels="seriesLabels"
          :labels="labels"
          :preSynergyData="preSynergyData"
          :postSynergyData="postSynergyData"
          :chartWidth="700"
          :chartHeight="500"
          :barSpacing="13"
          orientation="vertical"
        />
      </div>
      <div
        class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <p class="prepostsynergy">
          Total Consideration vs At-Risk Consideration
        </p>
        <HorizontalBarChart
          :labels="labels"
          :preSynergyData="preSynergyData"
          :postSynergyData="postSynergyData"
          :chartWidth="550"
          :chartHeight="480"
          :barHeight="27"
          :barSpacing="15"
          :valueScaleSteps="7"
        />
      </div>
    </div>

    <div class="container-fluid pt-5">
      <div
        class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div style="display: inline-block; width: 100%">
          <div class="pt-6 pl-6 investment float-left">All Investments</div>
          <div class="py-5 pr-4 float-right">
            <button
              @click="showModal"
              class="text-white flex addItem font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2"
            >
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
              <p class="text-base">Add Item</p>
            </button>
          </div>
        </div>

        <div class="relative overflow-x-auto">
          <DataTable :data="tableData" :columns="tableColumns">
            <template #action="{ item }">
              <div class="action-buttons">
                <button
                  @click="editItem(item)"
                  class="px-1 py-1 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                >
                  <svg
                    class="h-5 w-5 text-slate-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
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
                  Edit
                </button>
                <button
                  @click="deleteItem(item)"
                  class="px-1 py-1 ml-2 text-sm font-bold text-center border border-slate-300 inline-flex items-center rounded-lg focus:outline-none"
                >
                  <svg
                    class="h-5 w-5 text-red-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </div>
    <Modal
      v-show="isModalVisible"
      :tableData="tableData"
      @close="closeModal"
      @save="saveEdit"
      :editData="editData"
    />
  </div>
</template>


<script>
import "@/assets/styles/global.css";
definePageMeta({
  layout: "home",
});
export default {
  data() {
    return {
      isModalVisible: false,
      labelsh: [
        "Project A1",
        "Project A2",
        "Project A3",
        "Project A4",
        "Project A5",
        "Project A6",
        "Project A7",
        "Project A8",
        "Project A9",
        "Project A10",
      ],
      preSynergyDatah: [8, 2, 6, 4, 7, 1, 3, 5, 9, 4],
      postSynergyDatah: [4, 1, 3, 2, 4, 1, 2, 3, 4, 2],
      seriesLabels: ["Pre-Synergy Multiple", "Post-Synergy Multiple"],
      labels: [
        "Progress Capital",
        "Cynthia Ng",
        "Louay Alsadeek",
        "Miami Industries",
        "Moseley Watkins",
        "Troy Pollet",
        "Errol Blumer",
        "Mac Crowther",
        "Adam Gatto",
      ],
      preSynergyData: [4, 5, 4.5, 6, 5.5, 5.5, 4.8, 5, 5.5],
      postSynergyData: [3, 2.8, 3.2, 2.7, 3.1, 3.5, 2.9, 3.2, 4.6],
      tableColumns: [
        {
          label: "Investment Title",
          key: "title",
          sortable: true,
          width: "40%",
          color: "#000",
          fontWeight: "600",
        },
        {
          label: "Total Consideration",
          key: "totalConsideration",
          sortable: true,
        },
        { label: "Guaranteed", key: "guaranteed", sortable: true },
        { label: "At-risk", key: "atRisk", sortable: true },
      ],
      tableData: [
        {
          id: 1,
          title: "Progress Capital - Team - Recruiting",
          totalConsideration: "3.36",
          guaranteed: "5.22",
          atRisk: "2.4",
        },
        {
          id: 2,
          title: "Cynthia Ng - Individual - Recruiting",
          totalConsideration: "0",
          guaranteed: "0",
          atRisk: "2.4",
        },
        {
          id: 3,
          title: "jimo liu - Individual - Recruiting",
          totalConsideration: "1.59",
          guaranteed: "3.03",
          atRisk: "2.4",
        },
        {
          id: 4,
          title: "Louay Alsadek - Team - Recruiting",
          totalConsideration: "1.1",
          guaranteed: "1.91",
          atRisk: "2.4",
        },
        {
          id: 5,
          title: "Miami Industrial - Fernandez & Palazzo - Team - Recruiting",
          totalConsideration: "3.44",
          guaranteed: "3.44",
          atRisk: "2.4",
        },
        {
          id: 6,
          title: "Moseley Watkins - Team - Recruiting",
          totalConsideration: "1.23",
          guaranteed: "3.92",
          atRisk: "2.4",
        },
        {
          id: 7,
          title: "Troy Pollet - Individual - Recruiting",
          totalConsideration: "3.67",
          guaranteed: "3.49",
          atRisk: "2.4",
        },
        {
          id: 8,
          title: "Errol Blumer - Individual - Recruiting",
          totalConsideration: "5.37",
          guaranteed: "0",
          atRisk: "2.4",
        },
        {
          id: 9,
          title: "Mac Crowther Team - Team - Recruiting",
          totalConsideration: "6.58",
          guaranteed: "3.5",
          atRisk: "2.4",
        },
        {
          id: 10,
          title: "Adam Gatto - Individual - Recruiting",
          totalConsideration: "1.01",
          guaranteed: "1.36",
          atRisk: "2.4",
        },
      ],
      editData: null,
    };
  },

  methods: {
    deleteItem(item) {
      const index = this.tableData.findIndex(function (object) {
        return object.id === item.id;
      });
      this.tableData.splice(index, 1);
    },

    editItem(item) {
      alert(`Editing item: ${item.title}`);
      this.editData = { ...item };
      this.isModalVisible = true;
    },

    addItem() {
      this.editData.id = this.tableData.legnth + 1;
      this.tableData.push(this.editData);
    },

    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    saveEdit(updatedData) {
      // Update the item in the items array
      const index = this.tableData.findIndex(
        (item) => item.id === updatedData.id
      );
      console.log("index", index);
      if (index !== -1) {
        this.tableData.splice(index, 1, updatedData);
      } else {
        this.tableData.push(updatedData);
      }
      this.closeModal();
    },
  },
};
</script>
<style scoped>
.addItem {
  background-color: rgb(10 35 104);
}
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button.active {
  font-weight: bold;
  background-color: #ddd;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.action-buttons {
  display: flex;
  gap: 8px;
}
.action-buttons button {
  display: flex;
  align-items: center;
  gap: 4px;
}

.flex-container {
  display: flex;
  gap: 16px;
}

.box1 {
  flex: 1;
  padding: 16px;
}

.box {
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.edit-button {
  padding-right: 12px;
  display: inline-block;
}

.prepostsynergy {
  padding: 22px;
  font-size: 22px;
  font-weight: 600;
  position: absolute;
}
.fade-enter-to,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>

