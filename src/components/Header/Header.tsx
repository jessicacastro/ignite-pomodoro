import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './Header.styles'

import logoImage from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImage} alt="Ignite Pomodoro" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
