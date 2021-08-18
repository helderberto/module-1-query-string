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
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
