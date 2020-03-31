<template>
  <div>
    <div class="row">
      <p :class="labelClass">{{dateLabel}}</p>
    </div>
    <div class="row">
      <date-picker
        v-model="selectedDateRange"
        range
        :lang="'en'"
        confirm
        @confirm="selectedDate($event)"
        :format="format"
        :rangeSeparator="' - '"
        :shortcuts="false"
        :default-value="defaultValue"
        :not-after="disableDateAfter"
        :not-before="disableDateBefore"
        @clear="clearSelectedDates()"
      ></date-picker>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
export default {
  props: [
    "dateLabel",
    "labelClass",
    "lang",
    "rangeSeparator",
    "format",
    "defaultValue",
    "disableDateAfter",
    "disableDateBefore"
  ],
  components: { DatePicker },
  data() {
    return {
      selectedDateRange: []
    };
  },
  watch: {
    defaultValue: function() {
      this.selectedDateRange = this.defaultValue;
      console.log("1", this.selectedDateRange);
    }
  },
  created() {
    this.selectedDateRange = this.defaultValue;
  },
  methods: {
    selectedDate(event) {
      console.log("date range",event)
      this.$emit("selectedDateEvent", {
        startDate: new Date(this.selectedDateRange[0])
          .toLocaleDateString()
          .replace(/\u200e/g, ""),
        endDate: new Date(this.selectedDateRange[1])
          .toLocaleDateString()
          .replace(/\u200e/g, "")
      });
    },
    clearSelectedDates() {
      this.$emit("clearSelectedDateEvent");
    }
  }
};
</script>

<style scoped>
.label-class {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #777777;
  margin-bottom: 1px !important;
  float: left;
}
.label-class-date {
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: inherit;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: inherit;
  margin-bottom: 4px !important;
}
.mx-datepicker-range {
  width: 90% !important;
}
</style>