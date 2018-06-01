function tickerExists(ticker){
  var obj = JSON.parse(fetch("stockTickers.json"));

  for (var t in obj){
    if (t == ticker){
      return {true:obj[t]};
    }
  }

  return {false:"Invalid ticker."};
}
