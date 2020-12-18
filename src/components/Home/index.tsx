import React from "react";
import { ColumnContainer, Container, Wrapper } from "../Styles/defaultComponents"

const Home: React.FC = () => {
	return (
		<Wrapper>
			<ColumnContainer>
					<h1>Header</h1>
					<h1>Filmes Populares</h1>
					<h1>Filmes em Cartaz</h1>
					<h1>Filmes favoritos</h1>
					<h1>Footer</h1>
			</ColumnContainer>
		</Wrapper>
	);
};

export default Home;