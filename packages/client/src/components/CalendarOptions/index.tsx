import style from './index.module.css';

interface CalendarOptionsProps {
  children: JSX.Element[];
}

/**
 * CalendarOptions
 *
 * @param {CalendarOptionsProps} { children }
 * @return {object} JSX
 */
function CalendarOptions({ children }: CalendarOptionsProps) {
  return (
    <section class={style.calendarOptions}>
      {children}
    </section>
  );
}

export default CalendarOptions;
