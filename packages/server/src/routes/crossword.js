import { getCrosswordData } from '../store/selectors';

/**
 * crossword route
 *
 * @return {function} Function
 */
function crossword() {

  return function (req, res) {
    const { date, type } = req.params;
    const crosswordData = getCrosswordData(date, type);
    res.json(crosswordData);
  };

}

export default crossword;
