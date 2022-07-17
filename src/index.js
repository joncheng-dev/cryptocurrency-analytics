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
    for (let i = 0; i < 1; i++) {
      // Show to user in html
    }
    $(".showResults").text(``);
  } else {
    $(".showErrors").text(`There was an error: ${response}`);
  }
}
