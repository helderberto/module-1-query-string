const queryString = obj =>
  Object.entries(obj)
    .map(([key, value]) => {
      if (!Array.isArray(value) && typeof value === 'object') {
        throw new Error('Check your parameters.');
      }
      return `${key}=${value}`;
    })
    .join('&');

module.exports = { queryString };
