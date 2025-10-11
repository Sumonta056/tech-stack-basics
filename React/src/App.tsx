import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Like from "./components/like-unlike/Like";
import Gallery from "./image-handling/Gallery";
import Form from "./react-hook-form-zod/Form";
import DataFetching from "./tanstack-query/dataFetching";
import { DataPushing } from "./tanstack-query/dataPushing";
import UseRefMain from "./use-hook/useRef/UseRefMain";
import TodoList from "./zustand/TodoList";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Like />} />
        <Route path="/2" element={<DataFetching />} />
        <Route path="/3" element={<DataPushing />} />
        <Route path="/4" element={<TodoList />} />
        <Route path="/5" element={<Form />} />
        <Route path="/6" element={<UseRefMain />} />
        <Route path="/7" element={<Gallery />} />
        <Route path="*" element={<div>Not Found</div>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </QueryClientProvider>
  );
}
