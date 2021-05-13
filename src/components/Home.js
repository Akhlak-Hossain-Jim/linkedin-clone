import React from "react";
import styled from "styled-components";
import Leftside from "./home/Leftside";
import Main from "./home/Main";
import Rightside from "./home/Rightside";

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a href="/">Develop new skills</a> -Millions of members use LinkedIn
          Learning. Unlock your free access today.
        </h5>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
}

const Container = styled.main`
  background-color: #f3f2ef;
`;

const Section = styled.section`
  h5 {
    padding: 20px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
      text-decoration: underline;
    }
    a {
      text-decoration: none;
      color: #0a66c2;
    }
  }
`;

const Layout = styled.section`
  margin: 0 auto;
  padding: 0 80px;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
