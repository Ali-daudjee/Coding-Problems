function createCheckDigit(membershipId) {
    var sum = 0;
    var newSum = 0;
    for (let i = 0; i < membershipId.length; i++){
        sum = sum + parseInt(membershipId[i]);
    }
    if (sum > 9){
        newSum = sum;
        while (newSum > 9){
          var newSumNum = newSum;
          newSum = 0;
          while (newSumNum > 0){
            newSum = newSum + newSumNum % 10;
            newSumNum = Math.floor(newSumNum / 10);
            //newSum = checkDigi(newSum);
          }
        }
        return newSum;
    }
    else{
        return sum;
    }
    function checkDigi(sum1){
        var sum2 = 0;
        while (sum1 > 0){
            sum2 = sum2 + (sum1 % 10)
            sum1 = Math.floor(sum1 / 10);
        }
        return sum2;
    }
  }
  
  console.log(createCheckDigit("9999999999999999999999999999999999999999999999999999999999999999999999999999"));