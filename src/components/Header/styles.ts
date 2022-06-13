import styled from 'styled-components'

export const Container = styled.header`
  background: var(--header-background);
`

export const Content = styled.div`
  max-width: 1120px;
  margin-inline: auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--shape-02);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.1);
    }
  }
  @media (max-width: 768px) {
    button {
      padding: 0 1rem;
      margin-left: 1rem;
    }
  }
`
