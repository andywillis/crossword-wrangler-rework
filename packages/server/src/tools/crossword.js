/**
 * getClues
 *
 * @export
 * @param {object} obj
 * @return {object}
 */
export function getClues(obj) {
  const { title, clue: cluesArr } = obj;
  const label = title[0].b[0];
  const clues = cluesArr.map((o) => {
    const { _: clue, $: meta } = o;
    return { clue, meta };
  });
  return { label, clues };
}

/**
 * restructureData
 *
 * @export
 * @param {object} data
 * @return {object}
 */
export default function restructureData(data) {
  try {

    const { crossword } = data['crossword-compiler']['rectangular-puzzle'][0];
    const { grid, word, clues: cluesArr } = crossword[0];
    const { $: { width, height }, cell } = grid[0];

    const squares = cell.map(o => o.$);
    const words = word.map(o => o.$);

    const clues = {};
    const clueSet1 = getClues(cluesArr[0]);
    const clueSet2 = getClues(cluesArr[1]);
    clues[clueSet1.label.toLowerCase()] = clueSet1.clues;
    clues[clueSet2.label.toLowerCase()] = clueSet2.clues;

    return { width, height, squares, words, clues };

  } catch (err) {
    return null;
  }
}
