/**
 * today route
 *
 * @return {function} Function
 */
async function today() {

  return function (req, res) {
    res.json({ msg: 'Endpoint reached' });
  };

}

export default today;
