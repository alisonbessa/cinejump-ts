import React from 'react';

import { Container, MenuContainer, Link, Wrapper, ActionMenuContainer } from './styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Header: React.FC = () => (
    <Wrapper>
        <Container>
            <MenuContainer>
                <Link href='#'>Filmes</Link>
                <Link href='#'>Séries</Link>
            </MenuContainer>
            <Logo fill='#fff'/>
            <ActionMenuContainer>
                <a href='#'>
                    <FiSearch stroke='#fff'/>
                </a>
                <a href='#'>
                    <FaRegUserCircle fill='#fff'/>
                </a>
            </ActionMenuContainer>
        </Container>
    </Wrapper>
)

export default Header;