import style from './index.module.css';

interface IconProps {
  hintLabel: string;
  hintText: string;
  label: string;
  link: string;
}

function Icon({ hintLabel, hintText, label, link }: IconProps) {
  return (
    <a href={link} class={style.icon}>
      <button
        aria-describedby={hintLabel}
        type="button"
      >{label}
      </button>
      <p id={hintLabel} aria-hidden="true" hidden>
        {hintText}
      </p>
    </a>
  );
}

export default Icon;
