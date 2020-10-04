import React from 'react'
import { CardMsg, DivMsg } from './styles'

const TrackMsg = () => {
  return (
    <CardMsg>
      <DivMsg>Pedido Processado</DivMsg>
      <DivMsg>Pedido Despachado</DivMsg>
      <DivMsg>Pedido À caminho </DivMsg>
      <DivMsg>Pedido Entregue</DivMsg>
    </CardMsg>
  )
}

export default TrackMsg
