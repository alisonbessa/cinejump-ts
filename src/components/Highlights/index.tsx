import React from 'react';

import {
    Wrapper,
    Container,
    MainMovie,
    SecondaryMovie,
    Poster,
    WhiteStrip,
    SideMoviesContainer,
    MovieDetails 
} from './styles';

interface Props {
    data: any[];
}

const Highlights: React.FC<Props> = (movie:Props) => {

    if (movie.data.length > 0) {
        const mainImgSource = `https://image.tmdb.org/t/p/w780${movie.data[0].backdrop_path}`
        const secondImgSource = `https://image.tmdb.org/t/p/w780${movie.data[1].backdrop_path}`
        const thirdImgSource = `https://image.tmdb.org/t/p/w780${movie.data[2].backdrop_path}`
        
        return(
            <Wrapper>
                <WhiteStrip />
                <Container>
                    <MainMovie>
                        <MovieDetails>
                            <h4>{movie.data[0].title}</h4>
                            <span>{movie.data[0].overview}</span>
                        </MovieDetails>
                        <Poster src={mainImgSource} />
                    </MainMovie>
                    <SideMoviesContainer>
                        <SecondaryMovie>
                            <MovieDetails>
                                <span>{movie.data[1].title}</span>
                            </MovieDetails>
                            <Poster src={secondImgSource} />
                        </SecondaryMovie>
                        <SecondaryMovie>
                            <MovieDetails>
                                <span>{movie.data[2].title}</span>
                            </MovieDetails>
                            <Poster src={thirdImgSource} />
                        </SecondaryMovie>
                    </SideMoviesContainer>
                </Container>
            </Wrapper>
        )
    }

    return (
        <h1>Loading</h1>
    )
}

export default Highlights;