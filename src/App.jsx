import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import NotFound from "./common/NotFound";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import { useStore } from "zustand";
import { authStore } from "./store/store";
import Accordion from "./pages/landing/components/Accordion";
import File from "./common/File";
import Like from "./common/Like";
import SingleLike from "./common/SingleLike";

const App = () => {
  const {token} = useStore(authStore)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace={true} />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/file" element={<File />} />
        <Route path="/like" element={<Like />} />
        <Route path="/singleLike" element={<SingleLike />} />

        {token && <Route path="/home" element={<Home />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
