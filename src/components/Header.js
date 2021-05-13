import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const mediaQuery = window.matchMedia("(min-width: 480px)");
  const [navVisibility, setNavVisibility] = useState("Slider__nav");
  return (
    <Container>
      <Content>
        {mediaQuery.matches ? (
          <Logo>
            <Link href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </Link>
          </Logo>
        ) : (
          <Logo
            onClick={() => {
              navVisibility === "Slider__nav"
                ? setNavVisibility("Slider__nav active")
                : setNavVisibility("Slider__nav");
            }}
          >
            <img src="/images/user.svg" alt="" />
            <div className={navVisibility}>
              <div className="container">
                <div className="user__details">
                  <img src="/images/user.svg" alt="" />
                  <div className="user__title">
                    <h3>Akhlak Hossain Jim</h3>
                    <div className="lins">
                      <a href="/">View Profile</a>&nbsp;&#xB0;&nbsp;
                      <a href="/">Settings</a>
                    </div>
                  </div>
                </div>
                <div className="account">
                  <h3>Account</h3>
                  <a href="/">Settings & Privacy</a>
                  <a href="/">Help</a>
                  <a href="/">Language</a>
                </div>
                <div className="account">
                  <h3>Manage</h3>
                  <a href="/">Post & Activity</a>
                  <a href="/">Job Posting Account</a>
                </div>
                <div className="account">
                  <details>
                    <summary>Recent</summary>
                    <ul>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                    </ul>
                  </details>
                  <details className="colorful">
                    <summary>Groups</summary>
                    <ul>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                    </ul>
                  </details>
                  <details className="colorful">
                    <summary>Events</summary>
                    <ul>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
                        </a>
                      </li>
                      <li className="clear">
                        <a href="/">
                          <img src="/images/groupImg.svg" alt="" /> Lorem ipsum,
                          dolor sitLorem
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
                </div>
              </div>
              {/* <Link>Sign Out</Link> */}
            </div>
          </Logo>
        )}
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link className="navlist">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </Link>
            </NavList>

            <NavList>
              <Link className="navlist">
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </Link>
            </NavList>

            <NavList>
              <Link className="navlist">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </Link>
            </NavList>

            <NavList>
              <Link className="navlist">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </Link>
            </NavList>

            <NavList>
              <Link className="navlist">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </Link>
            </NavList>

            <User>
              <Link className="navlist me">
                <img src="/images/user.svg" alt="" />
                <div className="me-line__2">
                  <span>Me</span>
                  <img src="/images/down-icon.svg" alt="" />
                </div>
              </Link>

              <SignOut>
                <div className="container-user__details">
                  <div className="user__details">
                    <img src="/images/user.svg" alt="" />
                    <div className="user__title">
                      <h3>Akhlak Hossain Jim</h3>
                      <h6>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fugit, in.
                      </h6>
                    </div>
                  </div>
                  <div className="account">
                    <h3>Account</h3>
                    <a href="/">Settings & Privacy</a>
                    <a href="/">Help</a>
                    <a href="/">Language</a>
                  </div>
                  <div className="account">
                    <h3>Manage</h3>
                    <a href="/">Post & Activity</a>
                    <a href="/">Job Posting Account</a>
                  </div>
                </div>
                <Link className="s_out">Sign Out</Link>
              </SignOut>
            </User>

            <Work>
              <Link className="navlist">
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  img {
    @media (max-width: 768px) {
      width: 34px;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    .Slider__nav {
      display: none;
      &.active {
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 200;
        .container {
          width: 80vw;
          background-color: #fff;
          .account {
            padding: 10px;
            display: grid;
            flex-direction: row;
            text-align: left;
            border-bottom: solid 1px rgba(0, 0, 0, 0.2);
            h3 {
              font-size: 15px;
              padding-bottom: 10px;
              font-weight: 900;
            }
            a {
              text-align: left;
              color: rgba(0, 0, 0, 0.6);
              display: inline-block;
              padding: 5px 0;
              height: 20px;
              font-size: 12px;
              text-decoration: none;
            }
            details {
              color: black;
              padding: 4px 12px 4px 12px;
              font-size: 12px;
              cursor: pointer;
              summary {
                list-style-type: none; /* Firefox */
                font-weight: 900;
                font-size: 15px;
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
          }
        }
        .user__details {
          background-color: #f5f5f5;
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          padding: 20px 10px;
          height: max-content;
          border-bottom: solid 1px rgba(0, 0, 0, 0.3);
          img {
            width: 50px;
            border-radius: 50%;
          }
          .user__title {
            margin-left: 10px;
            display: grid;
            grid-gap: 10px;
            h3 {
              font-size: 17px;
              font-weight: 900;
            }
            .lins {
              display: flex;
              font-size: 16px;
              justify-content: space-around;
              a {
                text-decoration: none;
                font-weight: 600;
                color: #0a66c2;
              }
            }
          }
        }
      }
    }
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      @media (max-width: 768px) {
        max-width: 190px;
      }
    }

    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a.navlist {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 60px;
  right: 200px;
  background: white;
  border-radius: 10px;
  width: 250px;
  height: max-content;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: left;
  display: none;
  a.s_out {
    color: rgba(0, 0, 0, 0.6);
    text-align: left;
    justify-self: left;
    background: transparent;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
  }

  .user__details {
    display: flex;
    align-items: flex-start;
    padding: 10px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    img {
      width: 50px;
      border-radius: 50%;
    }
    .user__title {
      margin-left: 10px;
      h3 {
        font-size: 14px;
        font-weight: 900;
      }
      h6 {
        font-size: 10px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .account {
    padding: 10px;
    display: grid;
    flex-direction: row;
    text-align: left;
    border-bottom: solid 1px rgba(0, 0, 0, 0.2);
    h3 {
      font-size: 15px;
      padding-bottom: 10px;
      font-weight: 900;
    }
    a {
      text-align: left;
      color: rgba(0, 0, 0, 0.6);
      display: inline-block;
      padding: 5px 0;
      height: 20px;
      font-size: 12px;
      text-decoration: none;
    }
  }
`;

const User = styled(NavList)`
  a.me {
    display: grid;
    .me-line__2 {
      display: flex;
    }
  }
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      display: grid;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
