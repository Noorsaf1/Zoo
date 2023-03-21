import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";
import { Animal as AnimalType } from "./types";
import styled from 'styled-components';



interface Animal {
  id: number;
  name: string;
  description: string;
  lastFed: number | null;
}

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const AnimalList: React.FC = () => {
    const [animals, setAnimals] = useState<AnimalType[]>([]);


  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await axios.get("https://animals.azurewebsites.net/api/animals");
      const storedAnimals = response.data.map((animal: any) => ({
        ...animal,
        lastFed: null,
      }));
      localStorage.setItem("animals", JSON.stringify(storedAnimals));
      setAnimals(storedAnimals);
    };

    

    const storedAnimals = localStorage.getItem("animals");
    if (!storedAnimals) {
      fetchAnimals();
    } else {
      setAnimals(JSON.parse(storedAnimals));
    }

    
  }, []);

  
  return (
    <CardContainer>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </CardContainer>
  );
};

export default AnimalList;
