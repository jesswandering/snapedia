import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import SignupPage from "pages/signupPage";
import ProfilePage from "pages/profilePage";
import LoginPage from "pages/loginPage";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
