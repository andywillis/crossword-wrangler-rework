import style from './index.module.css';

function Header() {
  return (
    <header class={style.header}>
      <h1 class={style.columnone}>Crossword Wrangler</h1>
      <div class={style.columntwo}>
        <button type="button" class={style.help}>
          ?
        </button>
      </div>
    </header>
  );
}

export default Header;
