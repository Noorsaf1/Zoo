import React from "react";
import { Animal } from "./types";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface AnimalCardProps {
  animal: Animal;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 300px;
  height: 450px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const AnimalName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AnimalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const AnimalDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify;
  overflow: hidden;
  height: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
`;

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <Card>
      <div>
        <AnimalName>{animal.name}</AnimalName>
        <AnimalImage src={animal.imageUrl} alt={animal.name} />
        <AnimalDescription>{animal.description}</AnimalDescription>
      </div>
      <StyledLink to={`/animal/${animal.id}`}>Läs mer</StyledLink>
    </Card>
  );
};

export default AnimalCard;
