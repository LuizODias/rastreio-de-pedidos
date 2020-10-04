import styled, { css } from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  ${({ grow }) =>
    grow
      ? css`
          width: 100%;
          height: 100%;
        `
      : ''}
`
