import Icon from './Icon';

import style from './index.module.css';

function Header() {
  return (
    <header class={style.header}>
      <h1 class={style.title}>Crossword Wrangler</h1>
      <nav class={style.icons}>
        <Icon
          hintLabel="calendar-hint"
          hintText="Click the button to go to the calendar."
          label="C"
          link="/calendar"
        />
        <Icon
          hintLabel="button-hint"
          hintText="Click the button to go to the help section."
          label="?"
          link="/help"
        />
      </nav>
    </header>
  );
}

export default Header;
