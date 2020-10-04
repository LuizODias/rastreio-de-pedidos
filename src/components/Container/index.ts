import styled, { css } from 'styled-components'

interface IProps {
  readonly loading?: boolean
}

export default styled.div<IProps>`
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex: 1;
  width: 100%;
  ${({ loading }) =>
    loading &&
    css`
      justify-content: center;
      align-items: center;
    `};
  padding: 5vh 12vw;
`
