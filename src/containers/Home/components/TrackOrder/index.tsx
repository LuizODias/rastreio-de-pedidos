import React from 'react'
import { Order, SpanNumber } from './styles'

const TrackOrder = ({ orderNumber, codClient }) => {
  return (
    <>
      <Order>
        Pedido: <SpanNumber> #{orderNumber} </SpanNumber>
      </Order>
      <Order>
        Código do Cliente: <SpanNumber> #{codClient} </SpanNumber>
      </Order>
    </>
  )
}

export default TrackOrder
