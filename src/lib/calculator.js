function sum(x, y) {
  const parsedX = parseInt(x, 10);
  const parsedY = parseInt(y, 10);

  if (Number.isNaN(parsedX) || Number.isNaN(parsedY)) {
    throw new Error('Values must be numbers.');
  }

  return parsedX + parsedY;
}

module.exports = {sum};
