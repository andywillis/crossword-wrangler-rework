import style from './index.module.css';

interface CalendarHistoryProps {
  children: JSX.Element[];
}

function CalendarHistory({ children }: CalendarHistoryProps) {
  return (
    <section class={style.calendarHistory}>
      {children}
    </section>
  );
}

export default CalendarHistory;
