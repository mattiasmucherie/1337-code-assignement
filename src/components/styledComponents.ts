import styled, { keyframes } from 'styled-components'

const DotDotDot = keyframes`
  33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
  50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
  66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
`
export const Loader = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 12px;
  background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
    radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
  background-size: calc(100% / 3) 100%;
  background-repeat: no-repeat;
  animation: ${DotDotDot} 1s infinite linear;
`

export const ErrorMessage = styled.p`
  display: flex;
  justify-content: center;
`
