export type Person = {
  name: {
    first: string;
    last: string;
  };
  address: {
    city: string;
    state: string;
    road: string;
  };
  role: string;
  age: number;
};

export type PersonListProps = {
  person: Person;
};
