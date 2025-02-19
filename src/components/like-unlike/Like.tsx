import Card from "./Card";

export default function Like() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-rose50">Top Movies !</h1>
      <div className="flex flex-col gap-2 mt-4">
        <Card title="The Godfather" description="Under World done Movie" />
        <Card
          title="The Shawshank Redemption"
          description="IMDB Top Rated Move"
        />
      </div>
    </div>
  );
}
