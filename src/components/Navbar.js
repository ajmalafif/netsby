import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'

const StyledLink = styled(Link)`
  color: #333;
  transition: color .15s ease-in;
  text-decoration: none;

  &:hover {
    color: #05f;
    background-color: rgba(0,85,255,.03);

  }
`

const UnorderedList = tachyons("ul")`
dib w-100 w-75-ns tc tr-ns mt3 mt0-ns ph0
`
const List = tachyons("li")`
f5 dib mr4
`
const HeaderLogo = tachyons("h1")`
fw6 f4 mb0 mt2 mt3-ns dib w-100 w-25-ns tl-ns tc
`
const Header = tachyons("header")`
w-100
`
const Nav = tachyons("nav")`
dt w-100 border-box pv3 wrap
`
// const ContainerLogo = tachyons("div")`

// `

const Navbar = class extends React.Component {

render() {
  return (
    <Header>
    <Nav role="navigation" aria-label="main-navigation">
      <HeaderLogo>
        <StyledLink
        to="/"
        style={{ fontSize: '16px' }}
        title="Ajmal Afif">
          @ajmalafif
        </StyledLink>
      </HeaderLogo>
      <UnorderedList>
      <List>
          <StyledLink to="/about/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            About
          </StyledLink>
        </List>
      <List>
          <StyledLink to="/experience/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            Experience
          </StyledLink>
        </List>
        <List>
          <StyledLink to="/contact/examples/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            Blog
          </StyledLink>
        </List>
      </UnorderedList>
    </Nav>
  </Header>
  )}
}

export default Navbar
