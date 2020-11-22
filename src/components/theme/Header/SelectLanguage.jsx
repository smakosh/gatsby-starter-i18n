import React from 'react'

const SelectLanguage = ({ toggleLanguage, lang }) => (
	<select value={lang} onChange={e => toggleLanguage(e.target.value)}>
		<option value="en">English</option>
		<option value="es">Español</option>
		<option value="de">Deutsch</option>
		<option value="ar">عربي</option>
	</select>
)


export default SelectLanguage
