import style from './index.module.css';

function Footer() {
  return (
    <footer class={style.footer}>
      Andy Willis {new Date().getFullYear()}
      &nbsp;/&nbsp;
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA-4.0</a>
    </footer>
  );
}

export default Footer;
