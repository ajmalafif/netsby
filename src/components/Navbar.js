import React from 'react'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'

const UnorderedList = tachyons("ul")`
dib w-100 w-75-ns tc tr-ns mt4 mt0-ns ph0
`

const List = tachyons("li")`
f5 dib mr4 mr4-ns
`

const HeaderLogo = tachyons("h1")`
f4 mb0
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
          <Link 
          to="/" 
          className="dark-gray link logo" 
          title="Ajmal Afif">
            @ajmalafif
          </Link>
        </HeaderLogo>
      </ContainerLogo>
      <UnorderedList>
        <List>
          <Link
          className="link dark-gray"
          style={{
          transition: 'color .15s ease-in',
          textDecoration: 'none',
          color: '#333'
          }}
          to="/experience/"
          activeStyle={{
            color: '#05f',
            fontWeight: '600'
          }}
          activeClassName='active'
          >
            Experience
          </Link>
        </List>
        <List>
          <Link
          className="link dark-gray"
          style={{
          transition: 'color .15s ease-in',
          textDecoration: 'none',
          color: '#333'
          }}
          to="/about/"
          activeStyle={{
            color: '#05f',
            fontWeight: '600'
          }}
          activeClassName='active'
          >
            About
          </Link>
        </List>
        <List>
          <Link className="link dark-gray" to="/contact">
            Contact
          </Link>
        </List>
        <List>
          <Link className="link dark-gray" to="/contact/examples">
            Blog
          </Link>
        </List>
      </UnorderedList>
    </Nav>
  </Header>
  )}
}

export default Navbar
