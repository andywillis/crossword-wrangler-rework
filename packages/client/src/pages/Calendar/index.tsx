import CalendarBall from '../../components/CalendarBall';
// import CalendarHistory from '../../components/CalendarHistory';
import CalendarSelector from '../../components/CalendarSelector';

import { config } from '../../store/config';
import { calendarHistory } from '../../store/calendar';

import style from './index.module.css';

/**
 * Calendar
 *
 * @return {object} JSX
 */
function Calendar() {

  function handleClick(e: MouseEvent) {
    const { dataset: { text } } = e.target as HTMLInputElement;
    calendarHistory.value = [ ...calendarHistory.value, text ];
  }

  return (

    <section class={style.calendar}>

      {/* <CalendarHistory>
        {calendarHistory.value.map(ball => {
          return (
            <CalendarBall
              text={ball.text}
              type={ball.type}
              active
            />
          );
        })}
      </CalendarHistory> */}

      <CalendarSelector>
        {config.value.years.map(year => {
          return (
            <CalendarBall
              text={year}
              type="day"
              active={calendarHistory.value.includes(`${year}`)}
              handleClick={handleClick}
            />
          );
        })}
      </CalendarSelector>

    </section>
  );

}

export default Calendar;
