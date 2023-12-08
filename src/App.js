import './reset.css';
import React from 'react';
import styled from 'styled-components';
import porDoSol from './img/por-do-sol.jpg';
import rosaBackground from './img/bg-rosa.jpg';
import verdeBackground from './img/bg-verde.jpg';
import grama from './img/grama.jpg';
import autor from './img/autor.jpg';
import capaLivro from './img/capa-o-jacare-banguela.jpg';

export default function App() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Body>

      <Background>
        <BgHome style={{ backgroundImage: `url(${porDoSol})` }}></BgHome>
        <BgSection style={{ backgroundImage: `url(${verdeBackground})`}}></BgSection>
        <BgSection style={{ backgroundImage: `url(${rosaBackground})` }}></BgSection>
        <BgSection style={{ backgroundImage: `url(${grama})` }}></BgSection>
      </Background>

      <Container>

        <Header>
          <Logo>O Jacaré Banguela</Logo>
          <Nav>
            <NavItem onClick={() => scrollToSection('home')}>Início</NavItem>
            <NavItem onClick={() => scrollToSection('about')}>Sobre</NavItem>
            <NavItem onClick={() => scrollToSection('author')}>Autor</NavItem>
            <NavItem onClick={() => scrollToSection('order')}>Comprar</NavItem>
          </Nav>
        </Header>

        <HomeSection id="home">
          <div>
            <h2>Bem vindo ao site oficial do querido Jacaré Banguela!</h2>
            <p>Aqui você poderá conhecer um pouquinho mais do nosso amigo desdentado e do Gustavo, autor dessa aventura tão divertida</p>
          </div>
        </HomeSection>

        <AboutSection id="about">
          <img src={capaLivro} alt='Jacaré pizza'/>
          <div>
            <h2>Sobre o livro</h2>
            <p>Em meio a rimas e risadas, a mensagem sobre não ter vergonha de pedir ajuda quando não se consegue resolver um problema se destaca no livro “O Jacaré Banguela”. Um livro que promete encantar e entreter os pequenos do início ao fim.</p>
            <p>A história se baseia no Jacaré Banguela que adora comer, principalmente peixes, mas constantemente tem se engasgado. Ele não sabe mais o que fazer até que busca a ajuda do DR. Coruja para esse problema resolver.</p>
            <p>Quer saber como eles solucionam essa dificuldade?</p>
          </div>
        </AboutSection>

        <AuthorSection id="author">
          <div>
            <h2>Sobre o autor</h2>
            <p>Gustavo Gotardo, natural de Guarapuava, é o mais velho de 4 irmãos que cresceram em uma casa com estantes cheias de livros.</p>
            <p>Tem por formação a área da informática, mas em seu coração arde a paixão pela leitura e esse universo incrível.</p>
            <p>Pai de dois meninos, passa esse amor pelos livros a cada historinha contada no sofá de casa, no banco da praça, na espera pelo pediatra.</p>
            <p>E pensando em seus pequenos e nas criações de contos que faz para eles resolveu começar a escrevê-los e levá-los para mais crianças pelo mundo.</p>
          </div>
          <img src={autor} alt='Jacaré mini'/>
        </AuthorSection>

        <OrderSection id="order">
          <div>
            <h2>Garanta o seu!</h2>
            <p>O nosso site chegou ao fim, mas sua aventura com o Jacaré Banguela está apenas começando. Compre já a sua edição clicando <a href="https://www.amazon.com.br/jacar%C3%A9-banguela-Gustavo-Gotardo/dp/6554205438/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1WC6M1DHZLWX0&keywords=o+jacar%C3%A9+banguela&qid=1701995579&sprefix=o+jacar%C3%A9+bangue%2Caps%2C197&sr=8-1" target="_blank" rel="noopener noreferrer">aqui!</a></p>
          </div>
        </OrderSection>

      </Container>

    </Body>
  );
};

const Body = styled.div`
  position: relative;
`;

 const Background = styled.div`
  z-index: -1;
  width: 100%;
  height: 400vh;
  position: absolute;
`;

const BgHome = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: brightness(90%);
`;

const BgSection = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  display: flex;
  background-color: #f2f1e6;
  color: #4e5e43;
  padding: 15px 0;
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Ubuntu';
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 60px;
  @media (max-width: 600px) {
    width: 100vw;
    text-align: center;
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 60px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HomeSection = styled.section`
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  img {
    height: 100vh;
  }
  div {
    max-width: 1000px;
    margin: 0 70px 0 50px;
    color: #4e5e43;
    font-family: 'Ubuntu';
    h2 {
      font-weight: bold;
      font-size: 46px;
      line-height: 48px;
      margin: 0 0 50px 0;
    }
    p {
      margin: 30px 0 0 0;
      font-size: 30px;
      line-height: 40px;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    img {
      width: 70vw;
      margin: 50px 0;
    }
  }
`;

const AboutSection = styled.section`
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  img {
    height: auto;
    max-width: 50vw;
  }
  div {
    margin: 0 70px 0 50px;
    color: white;
    font-family: 'Ubuntu';
    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      margin: 0 0 50px 0;
    }
    p {
      margin: 30px 0 0 0;
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    img {
      width: 70vw;
      margin: 50px 0;
    }
  }
`;

const AuthorSection = styled.section`
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  img {
    height: auto;
    max-width: 60vw;
  }
  div {
    text-align: end;
    margin: 0 70px 0 50px;
    color: #4e5e43;
    font-family: 'Ubuntu';
    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      margin: 0 0 50px 0;
    }
    p {
      margin: 30px 0 0 0;
      font-size: 22px;
      line-height: 30px;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    img {
      width: 70vw;
      margin: 50px 0;
    }
  }
`;

const OrderSection = styled.div`
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  img {
    height: 100vh;
  }
  div {
    max-width: 1000px;
    margin: 0 70px 0 50px;
    color: white;
    font-family: 'Ubuntu';
    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      margin: 0 0 50px 0;
    }
    p {
      margin: 30px 0 0 0;
      font-size: 22px;
      line-height: 30px;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-style: italic;
    }
    a:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    img {
      width: 70vw;
      margin: 50px 0;
    }
  }
`;