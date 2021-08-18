const keyValueToString = ([key, value]) => {
  if (!Array.isArray(value) && typeof value === 'object') {
    throw new Error('Check your parameters.');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      const parts = item.split('=');
      if (parts[1].indexOf(',') > -1) {
        parts[1] = parts[1].split(',');
      }
      return parts;
    }),
  );
