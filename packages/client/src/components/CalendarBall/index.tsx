import classnames from 'classnames';

import style from './index.module.css';

interface CalendarBallProps {
  id: string,
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
    id,
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
        class={cn}
        data-id={id}
        data-type={type}
        data-text={text}
      >{text}
      </div>
    );
  }

  return (
    <button
      class={cn}
      data-id={id}
      data-type={type}
      data-text={text}
      type="button"
      onClick={handleClick}
    >{text}
    </button>
  );

}

CalendarBall.defaultProps = defaultProps;

export default CalendarBall;
