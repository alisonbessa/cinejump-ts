import React from 'react';

import MovieCard from '../../components/MovieCard';

import {
    Title,
    Container,
    ListContainer,
    ListContent,
    ErrorText
} from './styles';

interface Props {
    title?: string;
    data: any[];
    favoriteList?: any[]
    setFavoriteList?: any;
}

const MovieList: React.FC<Props> = ({ title, data, favoriteList, setFavoriteList }) => {

    return (
        <Container>
            <Title>{title}</Title>
            <ListContainer>
                <ListContent>
                    {data.map(movie => (
                        <MovieCard 
                            key={movie.id}
                            favoriteList={favoriteList}
                            setFavoriteList={setFavoriteList}
                            {...movie} 
                        />
                    ))}
                    {
                        data.length === 0 && title === "Favoritos" &&
                            <ErrorText>Favorite um filme para que ele apareça aqui.</ErrorText>
                    }
                    
                </ListContent>
            </ListContainer>
        </Container>
    )
}

export default MovieList;

