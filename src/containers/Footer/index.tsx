import React from 'react';

import { Container, Wrapper, LinksContainer } from './styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Footer: React.FC = () => (
    <Wrapper>
        <Container>
            <Logo fill='#fff'/>
            <LinksContainer>
                <a href='https://github.com/alisonbessa'>
                    Desenvolvido por Alison Bessa
                </a>
                <a href='#'>
                    Proposta do projeto
                </a>
                <a href='https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD'>
                    Protótipo no Figma
                </a>
                <a href='#'>
                    Apresentação ao comitê
                </a>
                <a href='https://github.com/alisonbessa/cinejump-ts'>
                    Documentação
                </a>
            </LinksContainer>
        </Container>
    </Wrapper>
)

export default Footer;