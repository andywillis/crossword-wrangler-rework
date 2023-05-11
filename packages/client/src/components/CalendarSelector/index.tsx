import style from './index.module.css';

interface CalendarSelectorProps {
  children: JSX.Element[];
}

/**
 * CalendarSelector
 *
 * @param {CalendarSelectorProps} { children }
 * @return {object} JSX
 */
function CalendarSelector({ children }: CalendarSelectorProps) {
  return (
    <section class={style.calendarSelector}>
      {children}
    </section>
  );
}

export default CalendarSelector;
