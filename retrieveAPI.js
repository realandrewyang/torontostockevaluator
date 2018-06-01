function addZero(num){
     	var ret = num.toString();
   	if (num < 10){
  	    ret = "0" + num.toString();
        }
        return ret;
    }
    function logResult(result) {
	console.log(result);
    }
    function logError(error) {
      console.log('Looks like there was a problem: \n', error);
    }
    function validateResponse(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
    function readResponseAsJSON(response) {
      return response.json();
    }
    function readResponseAsText(response) {
      return response.text();
    }
    function showText(responseAsText) {
	    
      // Get current date
      var datetime = "";
      var currentdate = new Date();
      var year = parseInt(currentdate.getFullYear());
      var month = parseInt(currentdate.getMonth()) + 1;
      var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var date = parseInt(currentdate.getDate());
      var hour = parseInt(currentdate.getHours());
      var minute = parseInt(currentdate.getMinutes());
	    
      // Check if market is currently closed
      if (hour * 60 + minute > 16 * 60){
        datetime = year.toString() + "-" + addZero(month) + "-" + addZero(date) + " " + "15:59:00";
      
      // Use previous day if market will open later in the day
      } else if (hour < 9){
	      
	// Beginning of the month exception
        if (currentdate == 1){
	
	  // January 1st exception
	  if (month == 1){
	    year--;
	    month = 12;
	  } else {
	    month--;
	  }
	  
	  // Set date to the last day of the previous month
          date = monthLength[month - 2];
          datetime = year.toString() + "-" + addZero(month) + "-" + addZero(date) + " " + "15:59:00";
	} else {
          datetime = year.toString() + "-" + addZero(month) + "-" + addZero(date) + " " + addZero(hour) + ":" + addZero(minute) + ":00";
	}
	      
      // Final case where the stock market is open
      } else {
	datetime = year.toString() + "-" + addZero(month) + "-" + addZero(date) + " " + addZero(hour) + ":" + addZero(minute) + ":00";  
      }    
      document.getElementById('name').innerHTML = datetime;
	    
      // Parse text and create keys
      var obj = JSON.parse(responseAsText);
      var id = ['open', 'high', 'low', 'close', 'volume'];
      
      // Insert text into table
      for (var i = 0; i < 5; i++){
      	document.getElementById(id[i]).innerHTML = obj["Time Series (1min)"][datetime][String.fromCharCode(i + 49) + '. ' + id[i]];
      }
      // document.getElementById('symbol').innerHTML = "MSFT";
	    
      // Write JSON to cache.json
      var fs = require("fs");
      var fileContent = "hello";
      fs.writeFile("cache.json", fileContent, (err) => {
      if (err) {
        console.error(err);
        return;
      };
      console.log("File has been created");
      });
    }
	
    function fetchText(pathToResource) {
      fetch(pathToResource)
      .then(validateResponse)
      .then(readResponseAsText)
      .then(showText)
      .catch(logError);
    }
	  
    
    function getTicker(input){
      var ticker=input.value
      // alert("You typed: " + ticker);
      document.getElementById("symbol").innerHTML = ticker;
      // document.write(ticker);
      
      fetchText('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + ticker
	      + '&interval=1min&apikey=4IZG324QO46F99VH');
    }	  
