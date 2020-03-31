<template>
  <div class="p-3">
    <div class="row mb-3">
      <b-button class="draft-button ml-auto mr-2" @click="filterButton()">
        <!-- <img alt src="@/assets/book-mark.svg" /> -->
        Filter
      </b-button>
    </div>
    <b-card class="p-0 m-0">
      <p class="sentinal-sidetext text-left p-0 m-0">Genrewise Split</p>

      <div class="row">
        <div
          class="card-inner-layout ml-2 mr-4 my-1 p-0 m-0"
          v-for="(data, i) in piechartData"
          :key="i"
        >
          <p class="p-0 m-0 sentinal-card-text p-1 text-left">{{ data.text }}</p>
          <hr class="p-0 m-0" />
          <w-pie-chart :dataValue="dataset" class="pie-chart" />
        </div>
      </div>
    </b-card>

    <b-card class="p-0 m-0 mt-3">
      <p class="sentinal-sidetext text-left p-0 m-0">Time Band Split</p>

      <div class="row">
        <div
          class="card-inner-layout ml-2 mr-4 my-1 p-0 m-0"
          v-for="(data, i) in piechartData"
          :key="i"
        >
          <p class="p-0 m-0 sentinal-card-text p-1 text-left">{{ data.text }}</p>
          <hr class="p-0 m-0" />
          <w-bar-chart :labels="barChartLabels" :datasets="barChartDatasets" />
        </div>
      </div>
    </b-card>
    <b-modal
      v-model="filterModal"
      title
      @ok="eventOk($event)"
      @cancel="eventCancel($event)"
      :centered="false"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      :hide-header="true"
      :hide-footer="true"
      :ok-only="false"
      size="xl"
    >
      <v-app id="inspire">
        <v-row align="center">
          <v-col cols="4">
            <v-select :items="selectBaseItems" label="Select Base" dense outlined></v-select>
          </v-col>
          <v-col cols="4">
            <v-select :items="selectCategoryItems" label="Category *" dense outlined></v-select>
          </v-col>
          <v-col cols="4">
            <v-autocomplete
              v-model="multiSelectedValues"
              :items="multiSelectItems"
              outlined
              dense
              chips
              small-chips
              label="Outlined"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8">
            <v-row align="center">
              <v-col cols="4">
                <v-select :items="selectBaseItems" label="Year Type" dense outlined></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="selectCategoryItems" label="Periodicty" dense outlined></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="selectCategoryItems" label="Calender Year *" dense outlined></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-select :items="selectCategoryItems" label="Date Range" dense outlined></v-select>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8">
            <v-row align="center">
              <v-col cols="4">
                <v-select :items="selectBaseItems" label="Select" dense outlined></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="selectCategoryItems" label="Target Group" dense outlined></v-select>
              </v-col>
              <v-col cols="4">
                <v-select :items="selectCategoryItems" label="Day Part" dense outlined></v-select>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <span class="float-right mt-n5">
              <w-button-input
                :buttonStyle="'clearFilterButton'"
                :buttonText="'Clear Filter'"
                @onButtonClick="clearAllFilters()"
              />
              <w-button-input
                :buttonStyle="'serachFilterButton'"
                :buttonText="'Search'"
                @onButtonClick="searchSelectedFilter()"
              />
            </span>
          </v-col>
        </v-row>
      </v-app>
    </b-modal>
  </div>
</template>
<script>
import piechart from "../widgets/piechart";
import barchart from "../widgets/barchart";
import ButtonInput from "../widgets/ButtonInput.vue";
export default {
  components: {
    "w-pie-chart": piechart,
    "w-bar-chart": barchart,
    "w-button-input": ButtonInput
  },
  data() {
    return {
      selectCategoryItems: ["foo", "bar", "fizz", "buzz"],
      selectBaseItems: ["foo", "bar", "fizz", "buzz"],
      multiSelectItems: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
      multiSelectedValues: ["JAN"],
      filterModal: false,
      dataset: [20, 30],
      piechartData: [
        { text: "Master Brand 1", value: [20, 30] },
        { text: "Master Brand 2", value: [20, 30] },
        { text: "Master Brand 3", value: [20, 30] }
      ],
      barChartLabels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
      barChartDatasets: [
        {
          type: "bar",
          label: "Received",
          backgroundColor: "rgba(21,121,171,.5)",
          borderColor: "rgba(21,121,171,.5)",
          borderWidth: 2,
          hoverBackgroundColor: "rgb(21,121,171,.5)",
          hoverBorderColor: "rgba(21,121,171,.5)",
          data: [65, 59, 5, 30, 81, 56, 55, 40]
        }
      ]
    };
  },
  methods: {
    filterButton() {
      this.filterModal = true;
    }
  }
};
</script>

<style scoped>
.card-layout {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
}
.card-inner-layout {
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
  width: 30%;
}
.pie-chart {
  width: 199px;
  height: 200px;
  margin: auto;
}
.draft-button {
  border: solid 1px #0e5d84;
  background-color: #ffffff;
  font-family: "Open Sans", sans-serif !important;
  color: #0e5d84;
  font-size: 15px;
  font-weight: bold;
  outline: none;
}
.sentinal-sidetext {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
}
.sentinal-card-text {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  color: #333333;
}
</style>
