import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 165px;
    height: 247.5px;
    border-radius: 5px;
    overflow: hidden;
    background-color:blue;
`;

export const IconButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    border: none;
    svg {
        height: 20px;
        width: 20px;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;