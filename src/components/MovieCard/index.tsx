import React, { useCallback, useState} from 'react';
import { BsHeartFill } from 'react-icons/bs';

import { Container, IconButton, Poster } from './styles';

import Props from './dtos';

const Movie: React.FC<Props> = ({   
        id,
        poster_path,
        isFavorite:favorite = false,
        favoriteList=[],
        setFavoriteList
    }:Props
) => {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const favoritePosition = favoriteList.findIndex(
        (e: { id: number | undefined; }) => e.id === id
    )

    const handleFavorite = useCallback(() => {
        setIsFavorite(!isFavorite);
        let newFavoriteList = [...favoriteList]
        
        favoritePosition >= 0 ? (
            newFavoriteList.splice(favoritePosition, 1)
        ) : (
            newFavoriteList.push({
                id: id,
                poster_path: poster_path,
                isFavorite: isFavorite || false
            })
        )

        setFavoriteList(newFavoriteList)
    }, [isFavorite, favoritePosition, setFavoriteList, id, poster_path, favoriteList]);
    
    const imgSource = `https://image.tmdb.org/t/p/w500${poster_path}`

    return(
        <Container>
            <IconButton onClick={handleFavorite}>
                <BsHeartFill 
                    fill={favoritePosition >= 0 ? '#e83f5b' : '#0F0F0F'}
                />
            </IconButton>
            <Poster src={imgSource} />
        </Container>
    )
}

export default Movie;