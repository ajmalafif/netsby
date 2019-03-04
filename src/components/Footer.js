import React from 'react'
import tachyons from 'tachyons-components'
import { Match } from '@reach/router'

const Copyright = tachyons("footer")`
wrap pv4 ph3 ph5-m ph6-l mid-gray ${props => props.home ? 'fixed left-0 bottom-0 right-0 z-0' : 'w-100'}
`

const FooterWithMatch = ({ children }) => (
  <Match path="/">
    {props => (
      props.match
      ? <Copyright home="true">{children}</Copyright>
      : <Copyright>{children}</Copyright>
      )
    }
  </Match>
)

const Footer = class extends React.Component {

render() {
  return (
    <FooterWithMatch>
      <small className="f6 db tc">© 2019 Ajmal Afif, All Rights Reserved</small>
    </FooterWithMatch>
  )}
}

export default Footer
