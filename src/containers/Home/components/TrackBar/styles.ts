import styled, { css } from 'styled-components'
import {
  Checked as CheckedImg,
  Circle as CircleImg,
} from '../../../../core/assets/images'

interface IProps {
  readonly active?: boolean
  readonly first?: boolean
}

export const TrackingProgressBarItem = styled.div<IProps>`
  margin: 2% 4% 0% 4%;

  &.item {
    background: #e5e7ed;
    border-radius: 50%;
    color: #768cad;
    display: inline-block;
    font-family: sans-serif;
    font-size: 17px;
    height: 30px;
    line-height: 30px;
    position: relative;
    text-align: center;
    width: 31px;
    z-index: 9;
    margin: 10px 0;

    ${({ active }) =>
      active &&
      css`
        background: #093782;
        color: #fff;
      `}

    ${({ first }) =>
      first &&
      css`
        margin-left: 0;
      `}
  }
`

export const TrackingProgressBarItemBar = styled.span<IProps>`
  &.bar {
    background: #e5e7ed;
    display: inline-block;
    margin: 3px -5px;
    height: 12px;
    width: 29%;
    z-index: 2;

    ${({ active }) =>
      active &&
      css`
        background: #093782;
      `}
  }
`

export const Checked = styled.img.attrs({ src: CheckedImg })`
  margin-top: 5px;
  height: 19px;
`

export const Circle = styled.img.attrs({ src: CircleImg })`
  margin-top: 5px;
  height: 19px;
`
