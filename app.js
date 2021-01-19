// Load data data.csv
d3.csv("./data.csv").then(function(healthData) {

    console.log(healthData);
  
    // log a list of states
    var state = healthData.map(data => data.state);
    console.log("state", state);
  
    // Cast each metric as a number using the unary + operator
    healthData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.obesity = +data.obesity;
      data.age = +data.age;
      data.income = +data.income;
      data.smokes = +data.smokes;
      data.healthcare = +data.healthcare;
      console.log("State:", data.state);
      console.log("Poverty:", data.poverty);
      console.log("Obesity:", data.obesity);
      console.log("Age:", data.age);
      console.log("Income:", data.income);
      console.log("Somkes:", data.smokes);
      console.log("Healthcare:", data.healthcare);
    });
}).catch(function(error) {
    console.log(error);
});
