import styled from 'styled-components'

export const Global = styled.div`
    font-family: 'Roboto', sans-serif;
    ${({ lang }) => lang === 'ar' && `
        font-family: 'Cairo', sans-serif;    
    `}
`
