import styled from 'styled-components'

const Wrapper = styled.section`
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
    .register-link {
      margin-right: 1rem;
    }
    .btn {
      padding: 0.75rem 1rem;
    }

    @media (min-width: 756px) {
      .page {
        grid-template-columns: 1fr 400px;
        column-gap: 3rem;
      }
    }
  }
`
export default Wrapper
