import styled from 'styled-components'
import { Menu } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const HeaderStyled = styled.div`
  background: ${({ theme }) => theme.color.primaryDark};
  min-height: 71px;
  display: flex;
  align-items: center;
  padding: 0 36px;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};
`

export const MenuStyled = styled(Menu)`
  opacity: 0.9;
  margin: 3em 0em 0em -3em;
`

export const EmptyIcon = styled.img.attrs({})`
  height: 1em;
  margin-right: 22px;
`

export const DivIcon = styled.div`
  height: 1em;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  margin-right: 20px;
  font-size: 16px;
`

export const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 340px;
  align-items: center;
  margin: 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 15px;
    margin-right: 20px;
  }

  a.active {
    padding: 15px 0px;
    font-weight: 400;

    &.sessions {
      border-bottom: 2px solid ${({ theme }) => theme.color.white};
    }

    &.history {
      border-bottom: 2px solid ${({ theme }) => theme.color.white};
    }
  }

  &:not(.active) {
    font-weight: 300;
  }
`

export const StyledDivider = styled.hr`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.primary};
  border-bottom: none;
  border-right: none;
  border-left: none;
  width: 80%;
  margin: 0 10%;
`
