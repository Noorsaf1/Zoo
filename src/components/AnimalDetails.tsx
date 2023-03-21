import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "./types";

type RouteParams = {
    id: string;
  };

  const AnimalDetails: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const [animal, setAnimal] = useState<Animal | null>(null);
    const [canFeed, setCanFeed] = useState<boolean>(true);
  
    useEffect(() => {
      const storedAnimals = localStorage.getItem("animals");
      if (storedAnimals) {
        const animals = JSON.parse(storedAnimals) as Animal[];
  
        const foundAnimal = animals.find((a) => a.id === parseInt(id!));
        if (foundAnimal) {
          setAnimal(foundAnimal);
  
          if (foundAnimal.lastFed) {
              const timeSinceLastFed = Date.now() - new Date(foundAnimal.lastFed).getTime();
              setCanFeed(timeSinceLastFed > 3 * 60 * 60 * 1000);
            }
            
            
        }
      }
    }, [id]);
  
    const handleFeedAnimal = () => {
      if (animal) {
        const now = new Date();
        setAnimal({
          ...animal,
          lastFed: now.toISOString(),
        });
        setCanFeed(false);
      }
    };
  
    if (!animal) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h1>{animal.name}</h1>
          <p>{animal.description}</p>
          <p>Last fed: {animal.lastFed ? new Date(animal.lastFed).toLocaleString() : "Not fed yet"}</p>
          <button onClick={handleFeedAnimal} disabled={!canFeed}>
            {canFeed ? "Feed Animal" : "Animal has been fed"}
          </button>
        </div>
      );
    };
    
    export default AnimalDetails;
    
    

  