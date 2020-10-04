import styled from 'styled-components'
import {
  Processed as ProcessedImg,
  Delivered as DeliveredImg,
  Dispatched as DispatchedImg,
  Wayed as WayedImg,
} from '../../../../core/assets/images'

export const CardImgs = styled.div`
  margin: 1em 2em 0em 2em;
  display: flex;
  justify-content: space-between !important;
`

export const DivImg = styled.div`
  display: flex;
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
