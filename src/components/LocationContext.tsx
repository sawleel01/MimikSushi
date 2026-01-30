"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Location = "acton" | "doncaster" | "wakefield";

type LocationContextType = {
  location: Location;
  setLocation: (l: Location) => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<Location>("doncaster");
  const [isInitialized, setIsInitialized] = useState(false);

  // Load location from sessionStorage on mount
  useEffect(() => {
    const savedBranch = sessionStorage.getItem("selectedBranch");
    if (savedBranch) {
      const normalizedBranch = savedBranch.toLowerCase() as Location;
      if (["acton", "doncaster", "wakefield"].includes(normalizedBranch)) {
        setLocation(normalizedBranch);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save location to sessionStorage whenever it changes
  const handleSetLocation = (newLocation: Location) => {
    setLocation(newLocation);
    const capitalized =
      newLocation.charAt(0).toUpperCase() + newLocation.slice(1);
    sessionStorage.setItem("selectedBranch", capitalized);
  };

  return (
    <LocationContext.Provider
      value={{ location, setLocation: handleSetLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error("useLocation must be used inside LocationProvider");
  return ctx;
};
