import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Hamoria</span>
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
