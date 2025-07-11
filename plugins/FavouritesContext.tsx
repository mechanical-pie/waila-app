import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CardDataBase {
    id: string;
    date: string;
    name: string;
    description: string;
    image: any;
}

interface CardData extends CardDataBase {
    addedAt: string;
}

interface FavouritesContextType {
    favourites: CardData[];
    addFavourite: (item: CardDataBase) => void; // Принимаем базовый тип без addedAt
    removeFavourite: (id: string) => void;
    isFavourite: (id: string) => boolean;
}

const FavouritesContext = createContext<FavouritesContextType>({
    favourites: [],
    addFavourite: () => {},
    removeFavourite: () => {},
    isFavourite: () => false,
});

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [favourites, setFavourites] = useState<CardData[]>([]);

    // Загрузка избранного при старте
    useEffect(() => {
        const loadFavourites = async () => {
            try {
                const saved = await AsyncStorage.getItem('@favourites');
                if (saved) {
                    setFavourites(JSON.parse(saved));
                }
            } catch (e) {
                console.error('Failed to load favourites', e);
            }
        };
        loadFavourites();
    }, []);

    // Сохранение при изменении
    useEffect(() => {
        const saveFavourites = async () => {
            try {
                await AsyncStorage.setItem('@favourites', JSON.stringify(favourites));
            } catch (e) {
                console.error('Failed to save favourites', e);
            }
        };
        saveFavourites();
    }, [favourites]);

    const addFavourite = (item: CardDataBase) => {
        const newItem: CardData = {
            ...item,
            addedAt: new Date().toISOString() // Добавляем дату здесь
        };
        setFavourites(prev => [...prev, newItem]);
    };

    const removeFavourite = (id: string) => {
        setFavourites(prev => prev.filter(item => item.id !== id));
    };

    const isFavourite = (id: string) => {
        return favourites.some(item => item.id === id);
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};