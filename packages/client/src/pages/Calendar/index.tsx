import CalendarBall from '../../components/CalendarBall';
import CalendarHistory from '../../components/CalendarHistory';
import CalendarSelector from '../../components/CalendarSelector';

import {
  config,
  selectedYear,
  calendarHistory
} from '../../store/signals';

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

      <CalendarHistory>
        {calendarHistory.value.map(ball => {
          return (
            <CalendarBall
              text={ball.text}
              type={ball.type}
              active
            />
          );
        })}
      </CalendarHistory>

      <CalendarSelector>
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
      </CalendarSelector>

    </section>
  );

}

export default Calendar;
