import React from 'react'
import LanguageProvider from './src/providers/LanguageProvider'

export const wrapRootElement = ({ element }) => (
	<LanguageProvider>{element}</LanguageProvider>
)
