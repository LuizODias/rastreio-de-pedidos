import React from 'react'
import {
  Delivered,
  Dispatched,
  CardImgs,
  Process,
  Wayed,
  DivImg,
} from './styles'

const TrackImg = () => {
  return (
    <CardImgs>
      <DivImg>
        <Process />
      </DivImg>
      <DivImg>
        <Dispatched />
      </DivImg>
      <DivImg>
        <Wayed />
      </DivImg>
      <DivImg>
        <Delivered />
      </DivImg>
    </CardImgs>
  )
}

export default TrackImg
