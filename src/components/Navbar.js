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
  }
`

const UnorderedList = tachyons("ul")`
dib w-100 w-75-ns tc tr-ns mt4 mt0-ns ph0
`
const List = tachyons("li")`
f5 dib mr4 mr4-ns
`
const HeaderLogo = tachyons("h1")`
f4 mb0 mt3
`
const Header = tachyons("header")`
z-2 left-0 top-0 right-0 ph4-ns
`
const Nav = tachyons("nav")`
dt w-100 border-box pv3 wrap
`
const ContainerLogo = tachyons("div")`
dib w-100 w-25-ns tl-ns tc
`

const Navbar = class extends React.Component {
 
 render() {
   return (
     <Header>
    <Nav role="navigation" aria-label="main-navigation">
      <ContainerLogo>
        <HeaderLogo>
          <StyledLink
          to="/"
          style={{ fontSize: '16px' }}
          title="Ajmal Afif">
            @ajmalafif
          </StyledLink>
        </HeaderLogo>
      </ContainerLogo>
      <UnorderedList>
        <List>
          <StyledLink to="/experience/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600
          }}
          >
            Experience
          </StyledLink>
        </List>
        <List>
          <StyledLink to="/about/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600
          }}
          >
            About
          </StyledLink>
        </List>
        <List>
          <StyledLink className="link dark-gray" to="/contact">
            Contact
          </StyledLink>
        </List>
        <List>
          <StyledLink className="link dark-gray" to="/contact/examples">
            Blog
          </StyledLink>
        </List>
      </UnorderedList>
    </Nav>
  </Header>
  )}
}

export default Navbar
