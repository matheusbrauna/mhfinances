import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape-01);
      color: var(--text-body);

      &:first-child {
        color: #fff;
        border-radius: 4px 0px 0px 4px;
      }

      &:last-child {
        border-radius: 0px 4px 4px 0px;
      }

      &.deposit {
        color: #33cc95;
      }

      &.withdraw {
        color: #e52e4d;
      }
    }
  }
`
