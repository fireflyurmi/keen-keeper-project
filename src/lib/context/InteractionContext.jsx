"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const InteractionContext = createContext();

export function InteractionProvider({ children }) {
  const [allInteractions, setAllInteractions] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('keenkeeper-interactions');
      if (saved) {
        const parsed = JSON.parse(saved);
        setTimeout(() => {
          setAllInteractions(parsed);
        }, 0);
      }
    } catch (error) {
      console.error("Failed to load interactions from localStorage:", error);
      localStorage.removeItem('keenkeeper-interactions');
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('keenkeeper-interactions', JSON.stringify(allInteractions));
    } catch (error) {
      console.error("Failed to save interactions to localStorage:", error);
    }
  }, [allInteractions]);

  const addGlobalInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${friendName}`,
      date: new Intl.DateTimeFormat('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }).format(new Date()),
      timestamp: Date.now()
    };

    setAllInteractions(prev => [newEntry, ...prev]);
  };

  const getFilteredInteractions = (filter) => {
    if (!filter || filter === 'All') return allInteractions;
    return allInteractions.filter(item => item.type === filter);
  };

  return (
    <InteractionContext.Provider value={{ 
      allInteractions, 
      addGlobalInteraction, 
      getFilteredInteractions 
    }}>
      {children}
    </InteractionContext.Provider>
  );
}

export const useGlobalInteractions = () => useContext(InteractionContext);