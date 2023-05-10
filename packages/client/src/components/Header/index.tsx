import style from './index.module.css';

function Header() {
  return (
    <header class={style.header}>
      <h1 class={style.columnone}>Crossword Wrangler</h1>
      <div class={style.columntwo}>
        <button
          aria-describedby="button-hint"
          type="button"
          class={style.help}
        >?
        </button>
        <p id="button-hint" aria-hidden="true" hidden>
          Click the button to go to the help section.
        </p>
      </div>
    </header>
  );
}

export default Header;
