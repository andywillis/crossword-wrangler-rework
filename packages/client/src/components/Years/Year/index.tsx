import classnames from 'classnames';

import style from './index.module.css';

interface YearProps {
  year: number;
  active: boolean;
  // eslint-disable-next-line no-unused-vars
  handleYear: ({ target }: {target: EventTarget | null}) => void;
}

function Year({ year, active, handleYear }: YearProps) {

  const cn = classnames([ style.year, active && style.active ]);

  return (
    <button
      class={cn}
      type="button"
      value={year}
      onClick={handleYear}
    >{year}
    </button>
  );
}

export default Year;
