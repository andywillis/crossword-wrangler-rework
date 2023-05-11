/**
 * v route
 *
 * @return {function} Function
 */
function specific() {

  return function (req, res) {
    res.json({ msg: 'Endpoint reached' });
  };

}

export default specific;
