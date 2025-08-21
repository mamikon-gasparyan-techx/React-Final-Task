import { UserContext } from "../userProvider/UserProvider";
import { useContext } from "react";
import "./Welcome.css";

export default function Welcome() {
  const { user, openModal } = useContext(UserContext);

  const handleButton = () => {
    if (user) {
      //createQuiz
    } else {
      openModal();
    }
  };

  return (
    <>
      <section className="welcome-wrapper">
        <p className="welcome-message">Enterprise AI Quiz Platform</p>
        <p className="message">
          Harness the power of artificial intelligence to create, manage, and
          analyze professional quizzes. Built for enterprise-scale learning and
          assessment.
        </p>
        <button className="create-quiz" onClick={handleButton}>
          + <span>Create Quiz</span>
        </button>
      </section>
    </>
  );
}
