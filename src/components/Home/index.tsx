import React from "react";
import { ColumnContainer, Container, Wrapper } from "../Styles/defaultComponents"
import Header from '../../containers/Header'

const Home: React.FC = () => {
	return (
		<ColumnContainer>
			<Wrapper>
				<Header />
				<h1>Filmes Populares</h1>
				<h1>Filmes em Cartaz</h1>
				<h1>Filmes favoritos</h1>
				<h1>Footer</h1>
			</Wrapper>
		</ColumnContainer>
	);
};

export default Home;