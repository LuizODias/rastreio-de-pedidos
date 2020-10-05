import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 1.5em;
  padding-right: 1.5em;
  margin-left: auto !important;
  padding-bottom: 3rem !important;
  padding-top: 3rem !important;
  margin-right: auto !important;
  align-items: center;
  max-width: 960px;
  justify-content: center;
`

export const Card = styled.div`
  z-index: 0;
  background-color: #eceff1;
  padding: 40px 40px 20px 40px;
  margin-top: 90px;
  width: 100%;
  margin-bottom: 90px;
  border-radius: 20px;
`

const animationName = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${animationName} 1s linear infinite;
`

export const DivLoading = styled.div`
  margin: 0% 44.5%;
`
