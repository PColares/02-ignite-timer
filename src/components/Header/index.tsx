import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import IgniteLogo from '../../assets/ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={IgniteLogo}
        alt="logomarca do ignite com dois triângulos verdes"
        title="Ignite"
      />
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
