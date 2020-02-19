
exports.min = function min (array) {
  if(!arguments[0] || array.length === 0) return 0;
  return array.sort((a,b) => b - a)[array.length - 1];
}

exports.max = function max (array) {
  if(!arguments[0] || array.length === 0) return 0;
  return array.sort((a,b) => b - a)[0];
}

exports.avg = function avg (array) {
  if(!arguments[0] || array.length === 0) return 0;
  let sum = 0;
  array.forEach(e => sum += e);
  return sum / array.length;
}

