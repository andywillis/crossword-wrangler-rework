import classnames from 'classnames';

import style from './index.module.css';

interface CalendarBallProps {
  text: string;
  type: string;
  active: boolean;
  // eslint-disable-next-line no-unused-vars
  handleClick?: ({ target }: {target: EventTarget | null}) => void;
}

const defaultProps: Partial<CalendarBallProps> = {
  handleClick: undefined
};

/**
 * CalendarBall
 *
 * Describes a calendar ball that is either clickable (button)
 * or not clickable (div)
 *
 * @param {CalendarBallProps} { year, clickable, active, handleYear }
 * @return {object} JSX
 */
function CalendarBall(props: CalendarBallProps) {

  const {
    text,
    type,
    active,
    handleClick
  } = props;

  const cn = classnames({
    [style.calendarBall]: true,
    [style[type]]: true,
    [style.active]: active
  });

  if (!handleClick) {
    return (
      <div
        data-type={type}
        data-text={text}
        class={cn}
      >{text}
      </div>
    );
  }

  return (
    <button
      data-type={type}
      data-text={text}
      class={cn}
      type="button"
      onClick={handleClick}
    >{text}
    </button>
  );

}

CalendarBall.defaultProps = defaultProps;

export default CalendarBall;
