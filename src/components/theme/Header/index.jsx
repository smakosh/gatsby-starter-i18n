import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Context, Container, Button } from '../../common'
import { Navbar, Links, StyledHeader, Logo } from './styles'

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage }) => (
			<StyledHeader>
				<Navbar as={Container}>
					<Logo as={Link} to="/">
						<FormattedMessage id="logo" />
					</Logo>
					<Links>
						<Link to="/">
							<FormattedMessage id="home" />
						</Link>
						<Link to="/about">
							<FormattedMessage id="about" />
						</Link>
						<Button type="button" onClick={toggleLanguage}>
							<FormattedMessage id="language" />
						</Button>
					</Links>
				</Navbar>
			</StyledHeader>
		)}
	</Context.Consumer>
)

export default Header
