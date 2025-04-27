import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface User {
  name: string;
  email: string;
  phone: string;
}

export function DataPushing() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newUser: User) => {
      return axios.post("https://jsonplaceholder.typicode.com/users", newUser);
    },
    onSuccess: () => {
      // Invalidate and refetch users queries
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleAddUser = () => {
    mutation.mutate({
      name: "John Doe",
      email: "john@gmail.com",
      phone: "1234567890",
    });
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Add User</h2>
      <button
        onClick={handleAddUser}
        className="px-4 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Adding..." : "Add John Doe"}
      </button>

      {mutation.isPending && (
        <div className="p-3 mt-4 text-blue-700 rounded bg-blue-50">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Adding user...
          </p>
        </div>
      )}

      {mutation.isSuccess && (
        <div className="p-3 mt-4 text-green-700 rounded bg-green-50">
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            User added successfully!
          </p>
        </div>
      )}

      {mutation.isError && (
        <div className="p-3 mt-4 text-red-700 rounded bg-red-50">
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Error adding user: {mutation.error.message}
          </p>
        </div>
      )}
    </div>
  );
}
