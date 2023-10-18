import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../Components/1stLayerandInnerLogIn/Logo'

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Logo />
      </nav>
      <Outlet />
    </>
  )
}
export default HomeLayout

const Wrapper = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
`
