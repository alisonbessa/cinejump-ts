import React from "react";
import { ColumnContainer, Container, Wrapper } from "../Styles/defaultComponents"

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';

import MovieCard from '../../components/MovieCard'
import Props from "../MovieCard/dtos";

const Home: React.FC = () => {
	const movie = {
		adult: false,
		backdrop_path: "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
		genre_ids: [16, 35, 18, 10402, 14],
		id: 508442,
		original_language: "en",
		original_title: "Soul",
		overview: "Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York. Quando um acidente o transporta para fora do seu corpo, fazendo com que ele exista em outra realidade na forma de sua alma, ele se vê forçado a embarcar em uma aventura ao lado da alma de uma criança que ainda está aprendendo sobre si, para aprender o que é necessário para retomar sua vida.",
		popularity: 4117.551,
		poster_path: "/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg",
		release_date: "2020-12-25",
		title: "Soul",
		video: false,
		vote_average: 8.4,
		vote_count: 3299
	}

	return (
		<ColumnContainer>
			<Wrapper>
				<Header />
				<MovieCard {...movie} />
				<h1>Filmes Populares</h1>
				<h1>Filmes em Cartaz</h1>
				<h1>Filmes favoritos</h1>
				<Footer />
			</Wrapper>
		</ColumnContainer>
	);
};

export default Home;