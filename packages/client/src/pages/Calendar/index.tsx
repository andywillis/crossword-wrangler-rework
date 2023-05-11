import Years from '../../components/Years';
import CalendarBall from '../../components/CalendarBall';

import { config, selectedYear } from '../../store/signals';

import style from './index.module.css';

/**
 * Calendar
 *
 * @return {object} JSX
 */
function Calendar() {

  function handleClick(e: MouseEvent) {
    const { value } = e.target as HTMLInputElement;
    selectedYear.value = Number(value);
  }

  return (
    <section class={style.calendar}>
      <Years>
        {config.value.years.map(year => {
          return (
            <CalendarBall
              text={year}
              type="year"
              active={year === selectedYear.value}
              handleClick={handleClick}
            />
          );
        })}
      </Years>
    </section>
  );

}

export default Calendar;
