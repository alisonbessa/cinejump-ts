import React from 'react';

import { Wrapper } from '../../components/Styles/defaultComponents';
import MovieCard from '../../components/MovieCard';

import { Title, Container, ListContainer, ListContent } from './styles';

interface Props {
    title?: string;
    data: any[];
}

const MovieList: React.FC<Props> = ({ title, data }) => {

    return (
        <Container>
            <Title>{title}</Title>
            <ListContainer>
                <ListContent>
                    {data.map(movie => (
                        <MovieCard key={movie.id} {...movie} />
                    ))}
                </ListContent>
            </ListContainer>
        </Container>
    )
}

export default MovieList;

