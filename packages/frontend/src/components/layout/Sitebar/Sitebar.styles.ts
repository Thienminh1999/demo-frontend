import styled from 'styled-components';


export const SitebarContainer = styled.div`
    height: 100vh;
    min-width: 200px;
`

export const MenuList = styled.ul`
    display: 'flex';
    list-style-type: 'none';
`

export const MenuItem = styled.li<{ $isActive: boolean }>`
    margin-block: 1rem;
    padding-left: 2rem;
    width: 100%;
    color: ${props => props.$isActive ? "#64C5B1" : ''};
`