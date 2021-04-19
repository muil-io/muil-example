import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Root = styled.div`
  background: white;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: #424242;
`;

const Logo = styled.img`
  display: block;
  margin: 60px auto 25px auto;
  width: 60px;
`;

const Title = styled.div`
  font-size: 26px;
  text-align: center;
`;

const Text = styled.div`
  text-align: center;
  font-weight: lighter;
  font-size: 18px;
  line-height: 30px;
  padding: 40px;
  margin: 20px 0;
`;

const GetStarted = styled.a`
  display: inline-block;
  color: #7156dd;
  width: 100%;
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
`;

const GettingStarted = ({ name }) => (
  <Root>
    <div>
      <Logo src={logo} alt="logo" />
    </div>

    <Title>Welcome to Muil</Title>

    <Text>
      <b>{name}</b>, now that you&apos;ve set up Muil it&apos;s time to write your first template{' '}
      <span role="img" aria-label="fire">
        🔥
      </span>
    </Text>

    <GetStarted href="https://www.muil.io" target="_blank" rel="noopener noreferrer">
      Get Started →
    </GetStarted>
  </Root>
);

GettingStarted.displayName = 'Getting Started';

GettingStarted.dynamicProps = {
  name: 'John',
};

export default GettingStarted;
