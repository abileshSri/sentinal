<template>
  <div>
    <br />
    <div class="row mb-3">
      <b-button
        class="draft-button ml-auto mr-2"
        @click="submitFeedbackAsDraft()"
      >
        <!--  <img alt src="@/assets/book-mark.svg" /> -->
        Filter
      </b-button>
    </div>
    <div class="card-layout mx-3">
      <p class="text-left p-0 m-0 sentinal-sidetext">Genrewise Split</p>
      <div class="row">
        <div
          class="card-inner-layout ml-2 mr-3 my-3 p-0 m-0"
          v-for="(data, i) in piechartData"
          :key="i"
        >
          <p class="p-0 m-0 sentinal-card-text text-left">{{ data.text }}</p>
          <hr class="p-0 m-0" />
          <w-pie-chart :dataValue="dataset" class="pie-chart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import piechart from "../widgets/piechart";
export default {
  components: {
    "w-pie-chart": piechart
  },
  data() {
    return {
      dataset: [20, 30],
      piechartData: [
        { text: "Master Brand 1", value: [20, 30] },
        { text: "Master Brand 2", value: [20, 30] },
        { text: "Master Brand 3", value: [20, 30] }
      ]
    };
  }
};
</script>

<style>
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
