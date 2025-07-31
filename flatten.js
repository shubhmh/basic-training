function flatten(unflatObject, prefix = '', result = {}) {
  for (let key in unflatObject) {
    const value = unflatObject[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }

  return result;
}
