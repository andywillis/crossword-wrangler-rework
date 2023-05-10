import style from './index.module.css';

interface ContentProps {
  children: JSX.Element;
}

function Content({ children }: ContentProps) {
  return (
    <main class={style.content}>
      {children}
    </main>
  );
}

export default Content;
