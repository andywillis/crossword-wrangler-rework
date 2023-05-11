// eslint-disable-next-line import/prefer-default-export
export function dataReady(data) {
  if (data) {
    if (Array.isArray(data)) return data.length;
    return Object.keys(data).length;
  }
}
