/**
 * api
 *
 * @param {string} endpoint
 * @return {promise}
 */
async function api(endpoint: string) {
  try {
    const res = await fetch(endpoint);
    if (res.ok) return res.json();
    Promise.reject();
  } catch (err) {
    console.log(err);
  }
}

export default api;
