import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function DataFetching() {
  const fetchBibleVerse = async () => {
    const response = await axios.get("https://bible-api.com/john%203:16");
    return response.data;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchBibleVerse,
    retry: 1, // retry once on failure
    refetchOnWindowFocus: false, // do not refetch on window focus
    refetchInterval: 1000 * 60 * 5, // refetch every 5 minutes
    gcTime: 1000 * 60 * 5, // 5 minutes cache
    staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
    placeholderData: 'keepPrevious', // Keep previous data while fetching new data
  });

  if (isPending) return <p> Loading... </p>;
  if (error) return <p> Error : {(error as Error).message} </p>;
  return (
    <div>
      <h2>Data Fetching</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetching;
