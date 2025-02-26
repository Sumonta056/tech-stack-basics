import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Like from "./components/like-unlike/Like";
import TypingProps from "./learning/3-typing-props/Index";
import UseState from "./learning/4-useState/Index";
import ParentChild from "./learning/5-parent-child/Main";
import Home from "./note-app/pages/Home";
import NewNote from "./note-app/pages/NewNote";
import NotePage from "./note-app/pages/NotePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Like />} />
      <Route path="/about" element={<About />} />
      <Route path="/3-typing-props" element={<TypingProps />} />
      <Route path="/4-usestate" element={<UseState />} />
      <Route path="/5-parent-child" element={<ParentChild />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/note/:id" element={<NotePage />} />
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
