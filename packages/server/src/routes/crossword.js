/**
 * crossword route
 *
 * @return {function} Function
 */
async function crossword() {

  return async function (req, res) {
    res.json({ msg: 'Endpoint reached' });
  };

}

export default crossword;
