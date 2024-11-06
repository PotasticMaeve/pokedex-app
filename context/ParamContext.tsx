import React, { createContext, useContext, useState, ReactNode } from "react";

interface ParamContextType {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const ParamContext = createContext<ParamContextType | undefined>(undefined);

export const ParamProvider = ({ children }: { children: ReactNode }) => {
  const [limit, setLimit] = useState<number>(10);

  return (
    <ParamContext.Provider value={{ limit, setLimit }}>
      {children}
    </ParamContext.Provider>
  );
};

export const useParams = () => {
  const context = useContext(ParamContext);
  if (!context) {
    throw new Error("useParams must be used within a ParamProvider");
  }
  return context;
};