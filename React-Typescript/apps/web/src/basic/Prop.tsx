type UserCardProps = {
  name: string;
  age?: number;
};

function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h1>{name}</h1>
      {age && <p>{age}</p>}
    </div>
  );
}

function Prop() {
  return (
    <>
      <UserCard name="Sumonta" age={10} />
      <UserCard name="Sumonta" />
    </>
  );
}

export default Prop;
