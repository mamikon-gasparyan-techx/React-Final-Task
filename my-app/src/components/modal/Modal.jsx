import Input from "./input/Input";
import "./Modal.css";

export default function LoginModal({
  email,
  password,
  setEmail,
  setPassword,
  onClose,
  onSubmit,
}) {
  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={onSubmit}>
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <Input
          inputPlaceholder="Enter your email"
          inputPurpose="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          inputPlaceholder="Enter your Password"
          inputPurpose="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signin-btn">
          Sign-in
        </button>
      </form>
    </div>
  );
}
