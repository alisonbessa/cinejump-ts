import api from '../index';

import RawResponse from './RawResponse';
import Response from './Response';

const Popular = async (): Promise<Response[]> => {
    const response = await rawPopular();

    return parseResponse(response);
};

export const rawPopular = async (): Promise<RawResponse[]> => {
	const api_key = '048712d053658b68816866a39f3285b0';
    const response = await api.get(`/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`);
    
    return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
    let response = [] as Response[];

    rawResponse.forEach(movie => {
        const parsedMovie = {
        overview: movie.overview,
        genreIds: movie.genre_ids,
        id: movie.id,
        originalTitle: movie.original_title,
        title: movie.title,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        voteCount: movie.vote_count,
        voteAverage: movie.vote_average,
        favorite: false,
    } as Response;

        response = [...response, parsedMovie];
    });

    return response;
};

export default Popular;