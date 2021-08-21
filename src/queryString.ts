type keyValue = [string, string];

const keyValueToString = ([key, value]: keyValue): string => {
  if (!Array.isArray(value) && typeof value === 'object') {
    throw new Error('Check your parameters.');
  }
  return `${key}=${value}`;
};

export const queryString = (o: object): string =>
  Object.entries(o).map(keyValueToString).join('&');

export const parse = (s: string): object =>
  Object.fromEntries(
    s.split('&').map(item => {
      const [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        const values = value.split(',');
        return [key, values];
      }
      return [key, value];
    }),
  );
