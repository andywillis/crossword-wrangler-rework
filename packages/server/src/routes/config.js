import { getConfig } from '../store/selectors';

/**
 * today route
 *
 * @return {function} Function
 */
function config() {

  return function (req, res) {
    res.json(getConfig());
  };

}

export default config;
