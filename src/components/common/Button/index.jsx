import styled from 'styled-components'

const Button = styled.button`
    color: #7795f8;
    padding: .3rem 1rem;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    background: #fff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .025em;
    text-decoration: none;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
`
export default Button
