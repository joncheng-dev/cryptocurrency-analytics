import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import apiService from "./api-service.js";

// User Interface Logic
$(document).ready(function () {
  $("#search").click(function () {
    const ids = $("#searchIds").val().toUpperCase();
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
    for (let i = 0; i < response.length; i++) {
      // Show to user in html
      let logo = `<img src="${response[i].logo_url}" alt="${response[i].name}logo">`;

      // let results = "";
      $(".showResults").append(`
        <div class="row">
          <div class="col-md-3">
            <p>Name: ${response[i].name}</p>
          </div>
          <div class="col-md-3 logo-align">
            ${logo}
          </div>
          <div class="col-md-6">
            <ul>
              <li>Symbol: ${response[i].symbol}</li>
              <li>Rank: ${response[i].rank}</li>
            </ul>  
          </div>
        </div>
      `);
    }
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}
