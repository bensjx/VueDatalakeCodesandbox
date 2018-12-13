import Papa from "papaparse";

var app = new Vue({
  el: "#app",
  data: {
    pd_gender_data: [["M", 0], ["F", 0]],
    module_final_data: [],
    pd_ctry_data: []
    // ... Include more arrays depending on which data you want to visualise over here
  },
  methods: {
    // This function serves to retrieve data depending on which ever button clicked. Replace with your desired google spreadsheet link
    getData(type) {
      if (type == "pd_gender") {
        this.getDataFromURL(
          "https://docs.google.com/spreadsheets/d/14dZQ5XLFG5-1NNGYTgclrTXlkEUiSWWiOCdkjNZaAfQ/gviz/tq?tqx=out:csv&sheet=personal_data",
          type
        );
      } else if (type == "module_final") {
        this.getDataFromURL(
          "https://docs.google.com/spreadsheets/d/14dZQ5XLFG5-1NNGYTgclrTXlkEUiSWWiOCdkjNZaAfQ/gviz/tq?tqx=out:csv&sheet=module_enrolment",
          type
        );
      } else if (type == "pd_ctry") {
        this.getDataFromURL(
          "https://docs.google.com/spreadsheets/d/14dZQ5XLFG5-1NNGYTgclrTXlkEUiSWWiOCdkjNZaAfQ/gviz/tq?tqx=out:csv&sheet=personal_data",
          type
        );
      }
    },
    // This function serves to transform the google spreadsheet into a readable data for us to mutate and place inside our charts
    getDataFromURL(url, type) {
      var curr = this;
      Papa.parse(url, {
        download: true,
        complete: function(results) {
          if (type == "pd_gender") {
            curr.personal_data_gender(results);
          } else if (type == "module_final") {
            curr.module_final(results);
          } else if (type == "pd_ctry") {
            curr.personal_data_ctry(results);
          }
        }
      });
    },
    // This function serves to help us sort our data so the charts are more visually appealing
    sort_data: function(a, b) {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return a[1] > b[1] ? -1 : 1;
      }
      console.log("sorted");
    },
    // From here on below, functions all depend on user needs. Create a function to process your data in whatever way you want.
    personal_data_gender: function(results) {
      var curr = this;
      for (var i = 0; i < results.data.length; i++) {
        if (results.data[i][2] == "M") {
          curr.pd_gender_data[0][1]++;
          // Mutate the list to force a re-render
          curr.pd_gender_data.push([1, 1]);
          curr.pd_gender_data.pop();
        } else if (results.data[i][2] == "F") {
          curr.pd_gender_data[1][1]++;
          // Mutate the list to force a re-render
          curr.pd_gender_data.push([1, 1]);
          curr.pd_gender_data.pop();
        }
      }
    },
    module_final: function(results) {
      var curr = this;
      var temp = [];
      for (var i = 1; i < results.data.length; i++) {
        // Skip index 0 as that is the heading
        if (!temp.includes(results.data[i][9])) {
          temp.push(results.data[i][9]);
          curr.module_final_data.push([results.data[i][9], 1]); // First data
        } else {
          for (var j = 0; j < curr.module_final_data.length; j++) {
            if (curr.module_final_data[j][0] == results.data[i][9]) {
              curr.module_final_data[j][1]++;
              curr.module_final_data.push([1, 1]);
              curr.module_final_data.pop();
            }
          }
        }
      }
      curr.module_final_data.sort(curr.sort_data);
      // Remember to mutate the data
      curr.module_final_data.push([1, 1]);
      curr.module_final_data.pop();
    },
    personal_data_ctry: function(results) {
      var curr = this;
      var temp = [];
      for (var i = 1; i < results.data.length; i++) {
        // Skip index 0 as that is the heading
        if (!temp.includes(results.data[i][6])) {
          temp.push(results.data[i][6]);
          curr.pd_ctry_data.push([results.data[i][6], 1]); // First data
        } else {
          for (var j = 0; j < curr.pd_ctry_data.length; j++) {
            if (curr.pd_ctry_data[j][0] == results.data[i][6]) {
              curr.pd_ctry_data[j][1]++;
              curr.pd_ctry_data.push([1, 1]);
              curr.pd_ctry_data.pop();
            }
          }
        }
      }
      curr.pd_ctry_data.sort(curr.sort_data);
      // Remember to mutate the data
      curr.pd_ctry_data.push([1, 1]);
      curr.pd_ctry_data.pop();
    }
  }
});
