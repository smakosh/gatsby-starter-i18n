import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import { Context, Container } from '../../common'
import SelectLanguage from './SelectLanguage'
import { Navbar, Links, StyledHeader, Logo } from './styles'

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
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
						<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
					</Links>
				</Navbar>
			</StyledHeader>
		)}
	</Context.Consumer>
)

export default Header
