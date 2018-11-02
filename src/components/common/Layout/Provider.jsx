import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Context } from '../Context'


const Provider = ({ children, lang, toggleLanguage }) => (
	<Context.Provider
		value={{
			lang,
			toggleLanguage: value => toggleLanguage(value)
		}}
	>
		{children}
	</Context.Provider>
)

const enhance = compose(
	withState('lang', 'handleLanguage', 'en'),
	withHandlers({
		toggleLanguage: ({ handleLanguage }) => value => {
			handleLanguage(value)
			localStorage.setItem('lang', value)
		}
	}),
	lifecycle({
		componentDidMount() {
			const localLang = localStorage.getItem('lang')
			if (localLang) {
				this.props.handleLanguage(localLang)
			} else {
				this.props.handleLanguage(navigator.language.split('-')[0])
			}
		}
	})
)

export default enhance(Provider)
