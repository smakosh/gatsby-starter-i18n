import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import SelectLanguage from './SelectLanguage'
import Container from '../../common/Container'
import { Navbar, Links, StyledHeader, Logo } from './styles'
import { useI18n } from '../../../providers/LanguageProvider'

const Header = () => {
	const { lang, handleLanguage } = useI18n()

	return (
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
					<SelectLanguage lang={lang} toggleLanguage={handleLanguage} />
				</Links>
			</Navbar>
		</StyledHeader>
	)
}

export default Header
