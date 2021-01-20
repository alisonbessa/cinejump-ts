import React, { useCallback, useEffect, useState } from "react";
import { ColumnContainer, Container, Wrapper } from "../Styles/defaultComponents"

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import MovieList from '../../containers/MovieList';

import Popular from '../../services/api/Popular';
import MovieResponse from '../../services/api/Popular/Response';

const Home: React.FC = () => {
	const [popularList, setPopularList] = useState([] as MovieResponse[]);

	const getPopular = useCallback(async () => {
		const response = await Popular();
		setPopularList(response);
	
		return response;
	}, []);

	useEffect(() => {
		getPopular();
	}, [getPopular]);
	
	return (
		<ColumnContainer>
			<Wrapper>
				<Header />
				<MovieList data={popularList} title='Populares'/>
				<h1>Filmes em Cartaz</h1>
				<h1>Filmes favoritos</h1>
				<Footer />
			</Wrapper>
		</ColumnContainer>
	);
};

export default Home;