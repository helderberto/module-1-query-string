const keyValueToString = ([key, value]) => {
  if (!Array.isArray(value) && typeof value === 'object') {
    throw new Error('Check your parameters.');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');
