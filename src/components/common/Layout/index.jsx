import React from 'react'
import ar from 'react-intl/locale-data/ar'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import es from 'react-intl/locale-data/es'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../../data/en.json'
import localAr from '../../../../data/ar.json'
import localEs from '../../../../data/es.json'
import localDe from '../../../../data/de.json'
import { Context } from '../Context'
import Provider from './Provider'
import { Global } from './styles'
import './layout.css'

addLocaleData([...ar, ...en, ...es, ...de])

const messages = {
	en: localEng,
	ar: localAr,
	es: localEs,
	de: localDe
}

const Layout = ({ children }) => (
	<Provider>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={messages[lang]}>
					<Global lang={lang}>
						{children}
					</Global>
				</IntlProvider>
			)
			}
		</Context.Consumer>
	</Provider>
)

export { Layout }
