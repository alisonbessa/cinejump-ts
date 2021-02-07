import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: #E83F5B;
    font-size: 12px;
    h4 {
        font-size: 16px;
        margin-bottom: 4px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 980px;
    margin: auto;
`;

export const MainMovie = styled.div`
    position: relative;
    width: 65.5%;
`;

export const SideMoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33%;
`;

export const SecondaryMovie = styled.div`
    position: relative;
    height: 48%;
`;

export const MovieDetails = styled.div`
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0px;
    border-radius: 0 0 10px 10px;
    color: white;
    background: rgba(0, 0, 0, 0.3);
`;

export const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

export const WhiteStrip = styled.div`
    position: absolute;
    bottom: -1px;
    background-color: white;
    height: 60px;
    width: 100%;
`;