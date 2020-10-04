import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  Delivered,
  Dispatched,
  CardImgs,
  Order,
  Process,
  Wayed,
  DivImg,
  TrackingProgressBarItem,
  TrackingProgressBarItemBar,
  SpanNumber,
} from './styles'

function Home() {
  // const [status, setStatus] = useState<string>()
  const [orderNumber, setOrderNumber] = useState<Number>()
  const [codTracker, setCodTracker] = useState<Number>()

  const setNumbers = () => {
    setOrderNumber(12345)
    setCodTracker(234094567242423422898)
  }

  useEffect(() => {
    setNumbers()
  })

  return (
    <Container>
      <Card>
        <Order>
          Pedido: <SpanNumber> #{orderNumber} </SpanNumber>{' '}
        </Order>
        <Order>
          Código de rastreio: <SpanNumber> #{codTracker} </SpanNumber>{' '}
        </Order>
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
        <CardImgs>
          <DivImg>Processado</DivImg>
          <DivImg>Despachado</DivImg>
          <DivImg>À caminho</DivImg>
          <DivImg>Entregue</DivImg>
        </CardImgs>

        <TrackingProgressBarItem>
          <TrackingProgressBarItem className="item" first active>
            1
          </TrackingProgressBarItem>
          <TrackingProgressBarItemBar className="bar" active />
          <TrackingProgressBarItem className="item" active>
            2
          </TrackingProgressBarItem>
          <TrackingProgressBarItemBar className="bar" active />
          <TrackingProgressBarItem className="item" active>
            3
          </TrackingProgressBarItem>
          <TrackingProgressBarItemBar className="bar" />
          <TrackingProgressBarItem className="item">4</TrackingProgressBarItem>
        </TrackingProgressBarItem>
      </Card>
    </Container>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Home)
