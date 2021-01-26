import React, { useCallback, useEffect, useState } from "react";
import { ColumnContainer, Wrapper } from "../Styles/defaultComponents"

import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import MovieList from '../../containers/MovieList';
import Highlights from '../Highlights';

import Popular from '../../services/api/Popular';
import NowPlaying from '../../services/api/NowPlaying';
import MovieResponse from '../../services/api/Popular/Response';

const Home: React.FC = () => {
	const [popularList, setPopularList] = useState([] as MovieResponse[]);
	const [nowPlayingList, setNowPlayingList] = useState([] as MovieResponse[]);
	const [highlightList, setHighlightList] = useState([] as MovieResponse[]);

	const getPopular = useCallback(async () => {
		const response = await Popular();
		setPopularList(response);
	
		return response;
	}, []);

	const getNowPlaying = useCallback(async () => {
		const response = await NowPlaying();
		setNowPlayingList(response.slice(3));
		setHighlightList(response.slice(0, 3));

		return response;
	}, []);

	useEffect(() => {
		getPopular();
		getNowPlaying();
	}, [getPopular, getNowPlaying]);

	return (
		<ColumnContainer>
			<Wrapper>
				<Header />
				<Highlights data={highlightList} />
				<MovieList data={popularList} title='Populares'/>
				<MovieList data={nowPlayingList} title='Em cartaz'/>
				<h1>Filmes favoritos</h1>
				<Footer />
			</Wrapper>
		</ColumnContainer>
	);
};

export default Home;