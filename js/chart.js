"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

let chartState = new AppState();

chartState.loadItems();

const allProductsToDisplay = chartState.allProducts;

function renderChart() {
  const chartArea = document.getElementById("chart");
  const productViews = [];
  const productClicks = [];
  const allProductNames = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "water-can",
    "wine-glass",
  ];

  for (let i = 0; i < allProductsToDisplay.length; i++) {
    productViews.push(allProductsToDisplay[i].timesShown);
    productClicks.push(allProductsToDisplay[i].timesClicked);
  }

  //   console.log(productViews, productClicks, allProductNames);

  const barChartData = {
    labels: allProductNames,
    datasets: [
      {
        label: "Views",
        data: productViews,
        backgroundColor: ["yellow"],
        borderColor: ["sienna"],
        borderWidth: 1,
      },
      {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["orange"],
        borderColor: ["sienna"],
        borderWidth: 1,
      },
    ],
  };

  const barChart = new Chart(chartArea, {
    type: "bar",
    data: barChartData,
    options: {
      scales: {
        y: {
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });

  localStorage.clear();
}

renderChart();
