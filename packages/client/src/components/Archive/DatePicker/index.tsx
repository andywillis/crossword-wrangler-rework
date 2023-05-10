import style from './index.module.css';

interface DatePickerProps {
  min: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: ({ target }: {target: EventTarget | null}) => void;
}

function DatePicker({ min, value, handleChange }: DatePickerProps) {
  return (
    <input
      class={style.datePicker}
      type="date"
      min={min}
      value={value}
      onChange={handleChange}
    />
  );
}

export default DatePicker;
