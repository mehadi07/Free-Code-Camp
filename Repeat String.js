
function repeatStringNumTimes(str, num) {

var newS = "";
   while (num > 0) {
    newS += str;
    num--;
  }
  return newS;
}

repeatStringNumTimes("abc", 3);
