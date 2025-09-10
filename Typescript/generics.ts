//----------------------------
// Generic Types

type Box<T> = {
  content: T;
};

function wrapInBox<T>(value: T): { returnType: T } {
  return { returnType: value };
}

const stringBox = wrapInBox("hello"); // { content: string }
const numBox = wrapInBox(42); // { content: number }
const chaosBox = wrapInBox({ wow: true }); // { content: { wow: boolean } }

//----------------------------
// Generic Functions

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = firstElement([1, 2, 3]); // number
const firstStr = firstElement(["a", "b", "c"]); // string

//----------------------------
// Generic Interfaces

interface DataStore<T> {
  content: T;
}

function wrapInBox2<T>(value: T): DataStore<T> {
  return { content: value };
}

const boolBox = wrapInBox2(true); // Box<boolean>

//----------------------------
// Real World Example

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface User {
  name: string;
  email: string;
  phone: string;
}

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const todoResponse: ApiResponse<Todo[]> = {
  data: [{ id: 1, text: "Learn TypeScript", completed: false }],
  loading: false,
  error: null,
};
const userResponse: ApiResponse<User> = {
  data: { name: "Alex", email: "alex@example.com", phone: "123-456-7890" },
  loading: true,
  error: null,
};
