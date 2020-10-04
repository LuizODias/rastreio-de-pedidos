import styled, { css } from 'styled-components'
import {
  Processed as ProcessedImg,
  Delivered as DeliveredImg,
  Dispatched as DispatchedImg,
  Wayed as WayedImg,
  Checked as CheckedImg,
  Circle as CircleImg,
} from '../../core/assets/images'
import MuiTableCell from '@material-ui/core/TableCell'
import MuiTable from '@material-ui/core/Table'
import { withStyles } from '@material-ui/styles'

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
  border-radius: 10px;
`

export const SpanNumber = styled.span`
  color: #007bff !important;
  font-weight: 700 !important;
`

export const Order = styled.div`
  font-size: 1.5em;
  padding-right: 13% !important;
  color: ${({ theme }) => theme.color.primary};
`

export const Process = styled.img.attrs({ src: ProcessedImg })`
  height: 4em;
`
export const Delivered = styled.img.attrs({ src: DeliveredImg })`
  height: 4em;
`

export const Dispatched = styled.img.attrs({ src: DispatchedImg })`
  height: 4em;
`

export const Wayed = styled.img.attrs({ src: WayedImg })`
  height: 4em;
`

export const Checked = styled.img.attrs({ src: CheckedImg })`
  height: 2em;
`
export const Circle = styled.img.attrs({ src: CircleImg })`
  height: 2em;
`

export const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell)

export const Table = withStyles({
  root: {
    marginTop: '2em',
  },
})(MuiTable)

export const CardImgs = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between !important;
`

export const DivImg = styled.div`
  display: flex;
`

interface IProps {
  readonly active?: boolean
  readonly first?: boolean
}

export const TrackingProgressBarItem = styled.div<IProps>`
  margin: 10px 0;

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
    margin: 0 -5px;
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
