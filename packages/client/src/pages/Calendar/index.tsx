import CalendarBall from '../../components/CalendarBall';
import CalendarHistory from '../../components/CalendarHistory';
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
    const { dataset: { id, type } } = e.target as HTMLInputElement;
    const ball = config.value[type].find(obj => obj.id === id);
    calendarHistory.value = [ ...calendarHistory.value, ball ];
  }

  function isActive(id) {
    return calendarHistory.value.some(ball => ball.id === id);
  }

  return (

    <section class={style.calendar}>

      <CalendarHistory>
        {calendarHistory.value.map(ball => {
          const { id, type, text } = ball;
          return (
            <CalendarBall
              key={id}
              text={text}
              type={type}
              active
            />
          );
        })}
      </CalendarHistory>

      <CalendarSelector>
        {config.value.year.map(obj => {
          const { id, type, text } = obj;
          return (
            <CalendarBall
              key={id}
              id={id}
              text={text}
              type={type}
              active={isActive(id)}
              handleClick={handleClick}
            />
          );
        })}
      </CalendarSelector>

    </section>
  );

}

export default Calendar;
