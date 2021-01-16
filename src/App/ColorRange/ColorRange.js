const ColorRange = ({ label, value, onChange }) => (
  <div>
    {label}
    <input
      type="range"
      min={0}
      max={255}
      step={1}
      value={value}
      onChange={(event) => onChange(event.target.valueAsNumber)}
    />
  </div>
);
export default ColorRange;
