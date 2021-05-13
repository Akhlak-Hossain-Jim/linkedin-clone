import React from "react";
import styled from "styled-components";

function Leftside() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground></CardBackground>
          <a href="w">
            <Photo></Photo>
            <Linka>Welcome There</Linka>
          </a>
          <a href="w">
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a href="w">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>

            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <details>
          <summary>Recent</summary>
          <ul>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
          </ul>
        </details>
        <details className="colorful">
          <summary>Groups</summary>
          <ul>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
          </ul>
        </details>
        <details className="colorful">
          <summary>Events</summary>
          <ul>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
            <li className="clear">
              <a href="/">
                <img src="/images/groupImg.svg" alt="" /> Lorem ipsum, dolor
                sitLorem
              </a>
            </li>
          </ul>
        </details>
        <details className="colorful">
          <summary>Followed Hashtags</summary>
          <ul>
            <li className="clear">
              <a href="/"># debate</a>
            </li>
            <li className="clear">
              <a href="/"># jobs</a>
            </li>
            <li className="clear">
              <a href="/"># technology</a>
            </li>
          </ul>
        </details>
        <a className="last" href="#sj">
          Discover more
        </a>
      </CommunityCard>
    </Container>
  );
}

const Container = styled.aside`
  grid-area: leftside;
  min-width: 190px;
  max-width: 240px;
  margin: 0 auto !important;
  @media (max-width: 540px) {
    display: none;
  }
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Linka = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: #000000e6;
    font-weight: 700;
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  details {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    cursor: pointer;
    summary {
      list-style-type: none; /* Firefox */
    }
    &.colorful {
      font-weight: 700;
      summary {
        color: #0a66c2;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  ul {
    list-style-type: none;
    li {
      border: none;
      /* margin: 4px 0; */
      a {
        max-width: 40ch;
        overflow: hidden !important;
        border: 0 !important;
        display: flex;
        align-items: center;
        color: #00000099;
        font-weight: 900;
        svg {
          color: rgba(0, 0, 0, 0.6) !important;
          &:hover {
            color: rgba(0, 0, 0, 0.8) !important;
          }
        }
        &:hover {
          color: rgba(0, 0, 0, 0.8) !important;
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }

  details[open] > summary {
    background-color: #fff;
  }
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    &.last {
      text-align: center;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.6) !important;
      &:hover {
        color: rgba(0, 0, 0, 0.8) !important;
      }
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default Leftside;
