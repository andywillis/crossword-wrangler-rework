import style from './index.module.css';

interface MainProps {
  children: JSX.Element;
}

function Main({ children }: MainProps) {
  return (
    <main class={style.main}>
      {children}
    </main>
  );
}

export default Main;
