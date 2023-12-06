import './reset.css';
import React from 'react';
import styled from 'styled-components';
import jacareMotorista from './img/jacare-motorista.jpeg';
import jacarePizza from './img/jacare-pizza.jpeg';
import jacareMini from './img/jacare-mini.webp';

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

      <Section id="home">
        <Content>
          <h2>Bem vindo ao site oficial do querido Jacaré Banguela!</h2>
          <p>Aqui você poderá conhecer um pouquinho mais do nosso amigo desdentado e do Gustavo, autor dessa aventura tâo divertida :)</p>
        </Content>
        <img src={jacareMotorista} alt='Jacaré motorista'/>
      </Section>

      <Section id="about">
        <img src={jacarePizza} alt='Jacaré pizza'/>
        <Content>
          <h2>Sobre o livro</h2>
          <p>O Jacaré Banguela adora comer, principalmente peixes, mas constantemente tem se engasgado. Ele não sabe mais o que fazer, então busca ajuda do Dr. Coruja para esse problema resolver.</p>
          <p>Quer saber como o Banguela consegue comer? Junte-se a nós nesta história rimada e venha se divertir pra valer!</p>
        </Content>
      </Section>

      <Section id="author">
        <Content>
          <h2>Sobre o autor</h2>
          <p>O autor dessa aventura é o Gustavo, também chamado de Guguinha Lindão! Ele tem uma família linda, muito amorosa e muito amada por todos que os conhecem.</p>
          <p>Eles em breve devem se mudar para Nova Friburgo, terra natal dos mini-jacarés: uma raça de jacarés geneticamente alterada que, apesar do pequeno tamanho, têm um cérebro superdesenvolvido capaz de de compreender conceitos de álgebra avançada.</p>
        </Content>
        <img src={jacareMini} alt='Jacaré mini'/>
      </Section>

      <Section id="order">
        <Content>
          <h2>Garanta o seu!</h2>
          <p>O nosso site chegou ao fim, mas sua aventura com o Jacaré Banguela está apenas começando. Compre já algumas unidades para presentar todas as crianças que você conhece e ama.</p>
          <p>Ah, e aproveite a nossa promoção: na compra de 99 unidades, a centésima sai com 25% de desconto!</p>
        </Content>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  display: flex;
  background-color: darkgreen;
  color: white;
  padding: 15px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 60px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 60px;
`;

const NavItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  img {
    border-radius: 5px;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 50px 0 50px;
  line-height: 20px;
  h2 {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    margin: 30px 0 0 0;
  }
`;
