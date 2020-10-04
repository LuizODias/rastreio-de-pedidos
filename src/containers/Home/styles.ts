import styled from 'styled-components'

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
  padding: 40px;
  margin-top: 90px;
  width: 100%;
  margin-bottom: 90px;
  border-radius: 20px;
`
