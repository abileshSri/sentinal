<template>
  <div class="p-3">
    <div class="row mb-3">
      <b-button class="draft-button ml-auto mr-2" @click="filterButton()">
        <!-- <img alt src="@/assets/book-mark.svg" /> -->
        Filter
      </b-button>
    </div>
    <b-card>
      <div
        class="text-left mb-2"
        style="text-align: left;font-size: 15px;font-weight: 600;"
      >Master Brand Details</div>
      <div class="row p-0 m-0 w-100" style="overflow:auto !important;">
        <table class="table table-bordered">
          <thead>
            <tr class="table-header-bg">
              <th v-for="(data, index)  in masterBrandTableDetails.fields" :key="index">{{data}}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="table-body-bg"
              v-for="(data, rowItemIndex)  in masterBrandTableDetails.items"
              :key="rowItemIndex"
            >
              <td v-for="(dataItem, columnItemIndex)  in data" :key="columnItemIndex">{{dataItem}}</td>
            </tr>
          </tbody>
        </table>
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
      <div class="row p-0 m-0">
        <div class="col-4 p-0 m-0">
          <w-dropdown
            @onSelectedValue="getSelectedBaseValue($event)"
            :options="selectBaseOptions"
            :defaultDropdownValue="selectedBaseValues"
            :placeholder="'select Base'"
          />
        </div>
        <div class="col-4 p-0 m-0">
          <w-single-dropdown-with-search-table
            :searchedDefaultValue="searchedCategoryName"
            :searchSource="searchCategorySource"
            :searchPlaceholder="'Select Category'"
            @searchAutoCompleEvent="getSearchCategoryTerm($event)"
            @getFieldEvent="getCategoryFieldsSelected($event)"
            :searchLoading="searchCategoryLoading"
            :noResultMessage="'No jobs found'"
          />
        </div>
        <div class="col-4 p-0 m-0"></div>
      </div>
      <div class="row p-0 m-0">
        <div class="col-8 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedYearTypeValue($event)"
                :options="selectYearTypeOptions"
                :defaultDropdownValue="selectedYearTypeValues"
                :placeholder="'Year Type'"
              />
            </div>
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedPeriodictyValue($event)"
                :options="selectPeriodictyOptions"
                :defaultDropdownValue="selectedPeriodictyValues"
                :placeholder="'Periodicty'"
              />
            </div>
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedCalenderYearValue($event)"
                :options="selectCalenderYearOptions"
                :defaultDropdownValue="selectedCalenderYearValues"
                :placeholder="'Calender Year'"
              />
            </div>
          </div>
        </div>
        <div class="col-4 p-0 m-0">
          <w-range-date-picker
            class="ml-4"
            @selectedDateEvent="selectedDate($event)"
            :dateLabel="''"
            :labelClass="'label-class'"
            :lang="'en'"
            :rangeSeparator="'-'"
            :format="'D-MMM-YYYY'"
            :defaultValue="defaultDatesValues"
            :disableDateAfter="Date.now()"
          />
        </div>
      </div>
      <div class="row p-0 m-0">
        <div class="col-8 p-0 m-0">
          <div class="row p-0 m-0">
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedChannelValue($event)"
                :options="selectChannelOptions"
                :defaultDropdownValue="selectedChannelValues"
                :placeholder="'Select Channel'"
              />
            </div>
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedTargetGroupValue($event)"
                :options="selectTargetGroupOptions"
                :defaultDropdownValue="selectedTargetGroupValues"
                :placeholder="'Target Group'"
              />
            </div>
            <div class="col-4 p-0 m-0">
              <w-dropdown
                @onSelectedValue="getSelectedDayPartValue($event)"
                :options="selectDayPartOptions"
                :defaultDropdownValue="selectedDayPartValues"
                :placeholder="'Day Part'"
              />
            </div>
          </div>
        </div>
        <div class="col-4 p-0 m-0">
          <!-- <span class="float-right mt-n5"> -->
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
          <!-- </span> -->
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import dropDown from "../widgets/dropdownSearch";
import ButtonInput from "../widgets/ButtonInput";
import DateRangePicker from "../widgets/dateRangePicker";
import SingleDropdownwithInlineSearch from "../widgets/singleDropdownwithInlineSearch";

export default {
  props: [],
  components: {
    "w-dropdown": dropDown,
    "w-button-input": ButtonInput,
    "w-range-date-picker": DateRangePicker,
    "w-single-dropdown-with-search-table": SingleDropdownwithInlineSearch
  },
  watch: {},
  computed: {},
  created() {},
  data() {
    return {
      selectPeriodictyOptions: [{ text: "option1", value: 1 }],
      selectedPeriodictyValues: null,
      selectCalenderYearOptions: [{ text: "option2", value: 1 }],
      selectedCalenderYearValues: null,
      selectChannelOptions: [{ text: "option3", value: 1 }],
      selectedChannelValues: null,
      selectTargetGroupOptions: [{ text: "option4", value: 1 }],
      selectedTargetGroupValues: null,
      selectDayPartOptions: [{ text: "option5", value: 1 }],
      selectedDayPartValues: null,
      selectBaseOptions: [{ text: "option6", value: 1 }],
      selectedBaseValues: null,
      selectYearTypeOptions: [{ text: "option7", value: 1 }],
      selectedYearTypeValues: null,
      searchSource: [],
      selectedFieldsArray: [{ searchField: null, searchTerms: [] }],
      allFields: [{ text: "Select One", value: null, disabled: true }],
      searchedCategoryName: "",
      searchCategorySource: [],
      searchCategoryLoading: false,
      defaultDatesValues: [null, null],
      filterModal: false,
      masterBrandTableDetails: {
        fields: [
          "62347832",
          "23478322",
          "32347832",
          "42347832",
          "52347832",
          "62347832",
          "23478322",
          "32347832",
          "42347832",
          "52347832",
          "62234783"
        ],
        items: {
          0: [
            "62347832",
            "23478322",
            "32347832",
            "42347832",
            "52347832",
            "62347832",
            "23478322",
            "32347832",
            "42347832",
            "52347832",
            "62347832"
          ],
          1: [
            "62347832",
            "23478322",
            "32347832",
            "42347832",
            "52347832",
            "62347832",
            "23478322",
            "32347832",
            "42347832",
            "52347832",
            "62347832"
          ]
        }
      }
    };
  },
  methods: {
    selectedDate(event) {
      console.log(event);
      this.defaultDatesValues[0] = event.startDate;
      this.defaultDatesValues[1] = event.endDate;
    },
    filterButton() {
      this.filterModal = true;
    },
    getSelectedBaseValue(event) {
      console.log("Selected Event", event);
      this.selectedBaseValues = event.value;
    },
    getSelectedYearTypeValue(event) {
      console.log("Selected Event", event);
      this.selectedYearTypeValues = event.value;
    },
    getSelectedPeriodictyValue(event) {
      console.log("Selected Event", event);
      this.selectedPeriodictyValues = event.value;
    },
    getSelectedCalenderYearValue(event) {
      console.log("Selected Event", event);
      this.selectedCalenderYearValues = event.value;
    },
    getSelectedChannelValue(event) {
      console.log("Selected Event", event);
      this.selectedChannelValues = event.value;
    },
    getSelectedTargetGroupValue(event) {
      console.log("Selected Event", event);
      this.selectedTargetGroupValues = event.value;
    },
    getSelectedDayPartValue(event) {
      console.log("Selected Event", event);
      this.selectedDayPartValues = event.value;
    },
    getSearchCategoryTerm(event) {
      this.searchCategoryLoading = true;
      this.searchCategorySource = [];
      console.log("Searched Text", event);
      if (event.length > 2) {
        let tempSearh = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
        this.searchCategoryLoading = false;
        console.log("Auto Dropdown Text", tempSearh);
        tempSearh.forEach((element, index) => {
          this.searchCategorySource[index] = element;
        });
        console.log(this.searchCategorySource);
      } else {
        this.searchCategoryLoading = false;
        this.searchCategorySource = [];
      }
    },
    getCategoryFieldsSelected(event) {
      if (event != "") {
        console.log("Selected Text", event);
        this.searchedCategoryName = event;
        sessionStorage.setItem(
          "categorySelectedValue",
          this.searchedCategoryName
        );
      }
    }
  }
};
</script>

<style scoped>
.draft-button {
  border: solid 1px #0e5d84;
  background-color: #ffffff;
  font-family: "Open Sans", sans-serif !important;
  color: #0e5d84;
  font-size: 15px;
  font-weight: bold;
  outline: none;
}
</style>