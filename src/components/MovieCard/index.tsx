import React, { useCallback, useState} from 'react';
import { BsHeartFill } from 'react-icons/bs';


import { Container, IconButton, Poster } from './styles';

import Props from './dtos';


const Movie: React.FC<Props> = (movie:Props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleFavorite = useCallback(() => {
        setIsFavorite(!isFavorite);
    }, [isFavorite]);
    
    const imgSource = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return(
        <Container>
            <IconButton onClick={handleFavorite}>
                <BsHeartFill 
                    fill={isFavorite ? '#e83f5b' : '#0F0F0F'}
                />
            </IconButton>
            <Poster src={imgSource} />
        </Container>
    )
}

export default Movie;