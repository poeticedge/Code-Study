new Vue({
  el: "#app",
  data: {
    record: null,
    recordID: "",
    modalContent: "",
  },
  created() {
    this.recordID = this.getQueryParam("recordID");
    if (this.recordID) {
      this.fetchAirtableRecord();
    } else {
      console.error("No record ID found in query parameters.");
    }
  },
  methods: {
    fetchAirtableRecord() {
      const baseID = "appiMaXIeYKI8rqEN"; // Replace with your Airtable base ID
      const tableName = "BannersBuilder"; // Replace with your Airtable table name
      const apiKey =
        "patlrS2mwZWODPx6b.1e4966d31e25236c3bde09837129d3b1771fac7994db4072c0fb1ed55d4fb573"; // Replace with your Airtable API key

      axios
        .get(
          `https://api.airtable.com/v0/${baseID}/${tableName}/${this.recordID}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        )
        .then((response) => {
          this.record = response.data.fields;
        })
        .catch((error) => {
          console.error(
            "There was an error fetching the data from Airtable:",
            error
          );
        });
    },
    getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    },
    openModal() {
      const styleContent = document.querySelector("style").innerHTML;
      let appContent = document.querySelector("#app").innerHTML;

      // Remove the <div id="app"> and its closing tag
      appContent = appContent.replace(/<\/?div[^>]*id="app"[^>]*>/g, "");

      // Remove the button element
      appContent = appContent.replace(
        /<button[^>]*class="btn btn-primary"[^>]*>Open Modal<\/button>/g,
        ""
      );

      this.modalContent = `<style>\n${styleContent}\n</style>\n${appContent}`;
      $("#copyModal").modal("show");
    },
  },
});
