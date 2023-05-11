import style from './index.module.css';

import { crossword } from '../../store/crossword';

function Home() {
  return (
    <section class={style.home}>
      Home {JSON.stringify(crossword.value)}
    </section>
  );
}

export default Home;
