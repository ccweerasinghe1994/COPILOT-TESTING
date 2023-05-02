// on window load
window.onload = function () {
    // function to return income array
    function getIncomeArray() {
        // create array
        var incomeArray = [];
        incomeArray.push(document.getElementById("januaryIncome").value);
        incomeArray.push(document.getElementById("februaryIncome").value);
        incomeArray.push(document.getElementById("marchIncome").value);
        incomeArray.push(document.getElementById("aprilIncome").value);
        incomeArray.push(document.getElementById("mayIncome").value);
        incomeArray.push(document.getElementById("juneIncome").value);
        incomeArray.push(document.getElementById("julyIncome").value);
        incomeArray.push(document.getElementById("augustIncome").value);
        incomeArray.push(document.getElementById("septemberIncome").value);
        incomeArray.push(document.getElementById("octoberIncome").value);
        incomeArray.push(document.getElementById("novemberIncome").value);
        incomeArray.push(document.getElementById("decemberIncome").value);
        return incomeArray;
    }

    // function to return expense array
    function getExpenseArray() {
        // create array
        var expenseArray = [];
        expenseArray.push(document.getElementById("januaryExpense").value);
        expenseArray.push(document.getElementById("februaryExpense").value);
        expenseArray.push(document.getElementById("marchExpense").value);
        expenseArray.push(document.getElementById("aprilExpense").value);
        expenseArray.push(document.getElementById("mayExpense").value);
        expenseArray.push(document.getElementById("juneExpense").value);
        expenseArray.push(document.getElementById("julyExpense").value);
        expenseArray.push(document.getElementById("augustExpense").value);
        expenseArray.push(document.getElementById("septemberExpense").value);
        expenseArray.push(document.getElementById("octoberExpense").value);
        expenseArray.push(document.getElementById("novemberExpense").value);
        expenseArray.push(document.getElementById("decemberExpense").value);
        return expenseArray;
    }


    // create chart js bar chart for id = "myChart"
    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar', // type of chart
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'Agust',
                'September',
                'October',
                'November',
                'December'
            ], // labels for bars
            datasets: [
                {
                    label: 'Income', // label for dataset
                    data: getIncomeArray(), // data for dataset
                    backgroundColor: [ // colors for bars
                        'rgba(255, 99, 132, 0.2)', // red
                        'rgba(54, 162, 235, 0.2)', // blue
                        'rgba(255, 206, 86, 0.2)', // yellow
                        'rgba(75, 192, 192, 0.2)', // green
                        'rgba(153, 102, 255, 0.2)', // purple
                        'rgba(255, 159, 64, 0.2)' // orange,
                    ],
                    borderColor: [ // border colors for bars
                        'rgba(255,99,132,1)', // red
                        'rgba(54, 162, 235, 1)', // blue
                        'rgba(255, 206, 86, 1)', // yellow
                        'rgba(75, 192, 192, 1)', // green
                        'rgba(153, 102, 255, 1)', // purple
                        'rgba(255, 159, 64, 1)' // orange
                    ],
                    borderWidth: 1 // border width for bars
                },
                {
                    label: 'Expense', // label for dataset
                    data: getExpenseArray(), // data for dataset
                    backgroundColor: [ // colors for bars
                        'rgba(255, 99, 132, 0.2)', // red
                        'rgba(54, 162, 235, 0.2)', // blue
                        'rgba(255, 206, 86, 0.2)', // yellow
                        'rgba(75, 192, 192, 0.2)', // green
                        'rgba(153, 102, 255, 0.2)', // purple
                        'rgba(255, 159, 64, 0.2)' // orange
                    ],
                    borderColor: [ // border colors for bars
                        'rgba(255,99,132,1)', // red
                        'rgba(54, 162, 235, 1)', // blue
                        'rgba(255, 206, 86, 1)', // yellow
                        'rgba(75, 192, 192, 1)', // green
                        'rgba(153, 102, 255, 1)', // purple
                        'rgba(255, 159, 64, 1)' // orange
                    ],
                    borderWidth: 1 // border width for bars
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true // start y axis at 0
                    }
                }]
            }
        }
    });

    // add event listener for button with id = chart-tab
    document.getElementById("chart-tab").addEventListener("click", function () {
        // reload chart
        myChart.data.datasets[0].data = getIncomeArray();
        myChart.data.datasets[1].data = getExpenseArray();
        myChart.update();
    });

    // download chart as png
    document.getElementById("download").addEventListener("click", function () {
        // download chart as png
        this.href = myChart.toBase64Image();
        this.download = "chart";
    });
}