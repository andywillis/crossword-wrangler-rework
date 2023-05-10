import style from './index.module.css';

import { crossword } from '../../store/signals';

function Home() {
  return (
    <section class={style.home}>
      Home {JSON.stringify(crossword)}
    </section>
  );
}

export default Home;
