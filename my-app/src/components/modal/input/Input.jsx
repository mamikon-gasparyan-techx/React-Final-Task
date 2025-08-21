import "./Input.css";

export default function Input({ inputPlaceholder, inputPurpose, value, onChange}) {
  return (
    <>
      <label className="input-purpose" htmlFor={inputPurpose}>
        <p className="p">{inputPurpose}</p>
      </label>
      <input
        type="text"
        className="input"
        placeholder={inputPlaceholder}
        name={inputPurpose}
        id={inputPurpose}
        value={value}
        onChange={onChange}
      />
    </>
  );
}