import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/home/landing/Landing";
import NotFound from "./common/NotFound";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace={true} />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
