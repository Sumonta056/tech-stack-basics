import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Like from "./components/like-unlike/Like";
import Form from "./react-hook-form-zod/Form";
import DataFetching from "./tanstack-query/dataFetching";
import { DataPushing } from "./tanstack-query/dataPushing";
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
        <Route path="*" element={<div>Not Found</div>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </QueryClientProvider>
  );
}
