import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface Destination {
  name: string;
  image: string;
  description: string;
  distance: string;
  travel: string;
}

interface CrewMember {
  name: string;
  image: string;
  role: string;
  bio: string;
}

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

interface AppData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

interface DataContextType {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

interface DataProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<AppData | null>(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get("/data.json")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
    fetchData();
  }, []);

  const value = {
    destinations: data?.destinations || [],
    crew: data?.crew || [],
    technology: data?.technology || [],
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useDataContext() {
  const value = useContext(DataContext);
  if (value === undefined)
    throw new Error(
      "Used DataContext outside of Provider. The context can only be used in children of the Provider"
    );
  return value;
}

export { useDataContext, DataProvider };
