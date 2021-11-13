import { Route, Routes } from "react-router-dom";
import Character from "./views/Character";
import Characters from "./views/Characters";
const Router = () => {
  return (
    <Routes>
        <Route path="/character/:id" element={<Character />} />
        <Route path="/" element={<Characters />} />
    </Routes>
  );
};

export default Router;
