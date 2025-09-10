function wrapInBox<T>(value: T): { returnType: T } {
  return { returnType: value };
}

const stringBox = wrapInBox("hello"); // { content: string }
const numBox = wrapInBox(42); // { content: number }
const chaosBox = wrapInBox({ wow: true }); // { content: { wow: boolean } }

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = firstElement([1, 2, 3]); // number
const firstStr = firstElement(["a", "b", "c"]); // string

interface DataStore<T> {
  content: T;
}

function wrapInBox2<T>(value: T): DataStore<T> {
  return { content: value };
}

const boolBox = wrapInBox2(true); // Box<boolean>
