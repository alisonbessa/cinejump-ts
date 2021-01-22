import api from '../index';

import RawResponse from './RawResponse';
import Response from './Response';

const NowPlaying = async (): Promise<Response[]> => {
    const response = await rawPopular();

    return parseResponse(response);
};

export const rawPopular = async (): Promise<RawResponse[]> => {
	const api_key = '048712d053658b68816866a39f3285b0';
    const response = await api.get(`/3/movie/now_playing?api_key=${api_key}&language=pt-BR`);
    
    return response.data.results;
};

const parseResponse = (rawResponse: RawResponse[]): Response[] => {
    let response = [] as Response[];

    rawResponse.forEach(movie => {
        const parsedMovie = {
        id: movie.id,
        poster_path: movie.poster_path,
        favorite: false,
    } as Response;

        response = [...response, parsedMovie];
    });

    return response;
};

export default NowPlaying;