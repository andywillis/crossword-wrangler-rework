import Year from '../../components/Years/Year';
import Years from '../../components/Years';

import { config, selectedYear } from '../../store/signals';

import style from './index.module.css';

/**
 * Calendar
 *
 * @return {object} JSX
 */
function Calendar() {

  function handleYear(e: MouseEvent) {
    const { value } = e.target as HTMLInputElement;
    selectedYear.value = Number(value);
  }

  return (
    <section class={style.calendar}>
      <Years>
        {config.value.years.map(year => {
          return (
            <Year
              year={year}
              active={year === selectedYear.value}
              handleYear={handleYear}
            />
          );
        })}
      </Years>
    </section>
  );

}

export default Calendar;
