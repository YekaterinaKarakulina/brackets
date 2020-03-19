module.exports = function check(str, bracketsConfig) {
  var arr = str.split( '' );
  var pos = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0] && arr[i + 1] == bracketsConfig[j][1]) {
        pos = i;
        arr.splice(pos, 2);
        i = i - (pos+1);
      }
    }
    if (arr.length == 0){
      return true;
    }
  }
  return false;
}