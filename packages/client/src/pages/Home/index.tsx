import style from './index.module.css';

import { config } from '../../store/signals';

function Home() {
  return (
    <section class={style.home}>
      Home {JSON.stringify(config.value)}
    </section>
  );
}

export default Home;
