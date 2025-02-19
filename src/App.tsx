import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Like from "./components/like-unlike/Like";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Like />} />
      <Route path="/about" element={<About />} />
      {/* Nested Routes */}
      <Route path="/:id">
        <Route index element={<div>User Profile Id</div>}></Route>
        <Route path="edit" element={<div>Edit User Profile Id</div>} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}
