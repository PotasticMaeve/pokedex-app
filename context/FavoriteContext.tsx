import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoritesContextType {
  favoriteIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favoriteIds");
        if (storedFavorites) {
          setFavoriteIds(JSON.parse(storedFavorites));
        }
      } catch (error) {
        return;
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
      } catch (error) {
        return;
      }
    };

    saveFavorites();
  }, [favoriteIds]);

  const addFavorite = (id: number) => {
    setFavoriteIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id: number) => {
    setFavoriteIds((prev) => prev.filter((favoriteId) => favoriteId !== id));
  };

  const isFavorite = (id: number) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
