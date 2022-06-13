import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --body-background:#1F1F1F;
    --header-background:  #1D1B1F;
    --shape-01: #49454f;
    --shape-02: #5420B6;
    
    --red: #e52e4d;
    --green:#5420B6;

    --blue-light: #5420B6;

    --text-title: #CCC2DC;
    --text-body:#CAC4CF;

  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1024px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 768px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 768px) {
      font-size: 75%; // 12px
    }
  }

  body {
    background-color: var(--body-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--body-background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover{
      filter: brightness(0.8)
    }
  }

  .logo{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: white;

    font-size: 1.5rem;
  }
`
