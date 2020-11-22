import React, { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [lang, setLanguage] = useState('en')

	const handleLanguage = value => {
		setLanguage(value)
		localStorage.setItem('lang', value)
	}

	useEffect(() => {
		const localLang = localStorage.getItem('lang')
		if (localLang) {
			setLanguage(localLang)
		} else {
			setLanguage(navigator.language.split('-')[0])
		}
		setLoading(false)
	}, [])

	return (
		<LanguageContext.Provider
			value={{
				lang,
				handleLanguage
			}}
		>
			{!loading && children}
		</LanguageContext.Provider>
	)
}

export const useI18n = () => useContext(LanguageContext)

export default LanguageProvider
