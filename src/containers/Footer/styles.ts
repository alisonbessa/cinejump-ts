import styled from 'styled-components';

import { Container as DefaultContainer, Wrapper as DefaultWrapper} from '../../components/Styles/defaultComponents';

export const Container = styled(DefaultContainer)`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled(DefaultWrapper)`
    background-color: #E83F5B;
    height: 200px;
    font-size: 14px;
    font-weight: 300;
`;

export const Link = styled.a`
    color: #FFF;
    font-size: 20px;
    padding-right: 20px;
    font-weight: 100;
    text-decoration: none;
`;

export const MenuContainer = styled.div`
    display: flex;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 180px;

    a {
        text-decoration: none;
        color: #fff;
        & + a {
            margin-top: 16px;
        }
    }
`;