import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { Container as DefaultContainer, Wrapper as DefaultWrapper} from '../../components/Styles/defaultComponents';

export const Container = styled(DefaultContainer)`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Wrapper = styled(DefaultWrapper)`
    background-color: #E83F5B;
    height: 100px;
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

export const ActionMenuContainer = styled.div`
    display: flex;
    a + a {
        margin-left: 20px;
    }
    svg {
        width: 25px;
        height: 25px;
    }
`;