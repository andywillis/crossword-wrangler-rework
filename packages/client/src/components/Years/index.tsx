import style from './index.module.css';

interface YearsProps {
  children: JSX.Element[];
}

function Years({ children }: YearsProps) {
  return (
    <section class={style.years}>
      {children}
    </section>
  );
}

export default Years;
