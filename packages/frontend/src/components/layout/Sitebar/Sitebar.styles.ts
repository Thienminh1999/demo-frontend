import { ColorDefaultEnum } from '@/config/colors.constant';
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
    color: ${props => props.$isActive ? `${ColorDefaultEnum.ONE_THEME_COLOR}` : ''};
    font-weight: ${props => props.$isActive ? "600" : ''};
`