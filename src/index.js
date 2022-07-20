import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import apiService from "./api-service.js";

// User Interface Logic
$(document).ready(function () {
  $("#search").click(function () {
    const ids = $("#searchIds").val();
    clearFields();
    apiCall(ids);
  });
});

function clearFields() {
  $("#searchIds").val("");
  $(".showResults").empty();
}

async function apiCall(ids) {
  const response = await apiService.getResults(ids);
  getElements(response);
}

function getElements(response) {
  if (response) {
    console.log("Response received.");
    console.log("Response is: " + response);
    console.log("Response array length is: " + response.length);
    for (let i = 0; i < response.length; i++) {
      console.log("Cycling through response array position: " + i);
    }
    for (let i = 0; i < response.length; i++) {
      console.log(`Response array position: ${i}`);
      // Show to user in html
      let logo = `<a href="${response[0].logo_url}">
      <img src="${response[0].logo_url}" alt="logo"></a>`;
      // let logo = `<a href="${response[i].logo_url}"><img src="${response[i].logo_url}" alt="${response[i].name} logo"></a>`;
      // let results = "";
      $(".showResults").append(`
        <div class="row">
          <div class="col-md-3">
            <p>Symbol here</p>
          </div>
          <div class="col-md-3">
            ${logo}
          </div>
          <div class="col-md-6">
            <p>List of other descriptions</p>
          </div>
        </div>
      `);
    }
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}
