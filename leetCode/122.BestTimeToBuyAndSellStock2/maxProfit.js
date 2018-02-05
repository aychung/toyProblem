var maxProfit = function(prices) {

  var prevPrice = prices[0];
  var ret = 0;

  if(prices.length < 2) {
    return 0;
  }

  for (var i = 1; i < prices.length; i++) {
    if(prices[i] > prevPrice) {
      ret += prices[i] - prevPrice;
    }
    prevPrice = prices[i];
  }

  return ret;
}


var temp = [5,4,3,2];

console.log(maxProfit(temp));
