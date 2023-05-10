import style from './index.module.css';

interface IconProps {
  hintLabel: string;
  hintText: string;
  label: string;
}

function Icon({ hintLabel, hintText, label }: IconProps) {
  return (
    <>
      <button
        aria-describedby={hintLabel}
        type="button"
        class={style.icon}
      >{label}
      </button>
      <p id={hintLabel} aria-hidden="true" hidden>
        {hintText}
      </p>
    </>
  );
}

export default Icon;
