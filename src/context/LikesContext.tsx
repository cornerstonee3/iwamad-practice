import { createContext, useContext, useState, type ReactNode } from 'react';

type LikesContextValue = { 
  likes: number; 
  addLike: () => void; 
};

const LikesContext = createContext<LikesContextValue | undefined>(undefined);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes((prev) => prev + 1);

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error('useLikes() must be used within a LikesProvider');
  }
  return context;
}