"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DogContextType {
    isWalking: boolean;
    toggleWalk: () => void;
}

const DogContext = createContext<DogContextType | undefined>(undefined);

export function DogProvider({ children }: { children: React.ReactNode }) {
    const [isWalking, setIsWalking] = useState(false);

    // Optional: Persist state to localStorage if desired
    useEffect(() => {
        const saved = localStorage.getItem("dog-walking-state");
        if (saved !== null) {
            setIsWalking(JSON.parse(saved));
        }
    }, []);

    const toggleWalk = () => {
        setIsWalking((prev) => {
            const newState = !prev;
            localStorage.setItem("dog-walking-state", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <DogContext.Provider value={{ isWalking, toggleWalk }}>
            {children}
        </DogContext.Provider>
    );
}

export function useDog() {
    const context = useContext(DogContext);
    if (context === undefined) {
        throw new Error("useDog must be used within a DogProvider");
    }
    return context;
}
