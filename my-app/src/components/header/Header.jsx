import { UserContext } from "../userProvider/UserProvider";
import { useContext, useState } from "react";
import LoginModal from "../modal/Modal";
import "./Header.css";

export default function Header({ logoUrl }) {
  const {
    user,
    setUser,
    logout,
    isModalOpen,
    openModal,
    closeModal,
  } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const id = Date.now();

  const handleLogout = () => {
    logout();
  };

  const validEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !validEmail(email)) {
      return;
    }

    const newUser = { email, password, id };
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);

    closeModal();
    setEmail("");
    setPassword("");
  };

  const handleModalClose = (e) => {
    e?.preventDefault();
    closeModal();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="brain">
          <img src={logoUrl} alt="sparkles" height="40px" width="40px" />
          <h1>QuizMaster Pro</h1>
        </div>
        <div className="dashboard">
          {!user && (
            <button className="btn" onClick={openModal}>
              log-in
            </button>
          )}
          {user && (
            <>
              <p>
                Welcome back
                {user && <span>, {user.email}</span>}
              </p>
              <button className="btn" onClick={handleLogout}>
                Browse Quizes
              </button>
              <button className="btn" onClick={handleLogout}>
                logout
              </button>
            </>
          )}

          {isModalOpen && (
            <LoginModal
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              onClose={handleModalClose}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
