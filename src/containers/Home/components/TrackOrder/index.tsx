import React from 'react'
import { Order, SpanNumber } from './styles'

const TrackOrder = ({ orderNumber, codTracker }) => {
  return (
    <>
      <Order>
        Pedido: <SpanNumber> #{orderNumber} </SpanNumber>
      </Order>
      <Order>
        Código de rastreio: <SpanNumber> #{codTracker} </SpanNumber>
      </Order>
    </>
  )
}

export default TrackOrder
