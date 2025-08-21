import { UserProvider } from "./components/userProvider/UserProvider";
import SignInPage from "./pages/SignInPage";
import "./App.css";

function App() {
  return (
    <>
      <UserProvider>
        <SignInPage />
      </UserProvider>
    </>
  );
}

export default App;
