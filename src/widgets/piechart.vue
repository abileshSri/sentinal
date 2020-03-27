<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["dataValue"],
  mounted() {
    this.showChartData();
  },
  data() {
    return {
      LabelValue: ["", ""]
    };
  },
  methods: {
    showChartData() {
      this.renderChart(
        {
          // labels: [this.LabelValue[0], this.LabelValue[1]],
          datasets: [
            {
              backgroundColor: ["#6c96c9", "#71c67b"],
              data: [this.dataValue[0], this.dataValue[1]]
            }
          ]
        },
        {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 10,
              padding: 20
            }
          },
          responsive: true,
          maintainAspectRatio: false
          // elements: {
          //   arc: {
          //     borderWidth: 0
          //   }
          // }
        }
      );
    }
  }
};
</script>
