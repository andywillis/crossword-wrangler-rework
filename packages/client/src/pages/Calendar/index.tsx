import CalendarBall from '../../components/CalendarBall';
import CalendarOptions from '../../components/CalendarOptions';
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

      <CalendarSelector>
        <CalendarBall
          id="year"
          text="Year"
          type="selector"
          // active={isActive(id)}
          handleClick={handleClick}
        />
        <CalendarBall
          id="month"
          text="Month"
          type="selector"
          // active={isActive(id)}
          handleClick={handleClick}
        />
        <CalendarBall
          id="day"
          text="Day"
          type="selector"
          // active={isActive(id)}
          handleClick={handleClick}
        />
      </CalendarSelector>

      <CalendarOptions>
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
      </CalendarOptions>

    </section>
  );

}

export default Calendar;
