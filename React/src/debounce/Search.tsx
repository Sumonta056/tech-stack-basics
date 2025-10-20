import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("null");
  const DELAY_TIME = 500;
  const debouncedQuery = useDebounce({ query, DELAY_TIME });

  useEffect(() => {
    if (debouncedQuery) {
      fetch("/")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default Search;
