import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TrackBar, TrackImg, TrackMsg, TrackOrder } from './components'
import { Card, Container } from './styles'
import { getStatus } from '../../services'

function Home(props) {
  const [orderNumber, setOrderNumber] = useState<String>()
  const [codTracker, setCodTracker] = useState<String>()

  const { match } = props
  let { order, tracker } = match.params

  const setNumbers = async () => {
    setOrderNumber(order)
    setCodTracker(tracker)
    const test = await getStatus(orderNumber, codTracker)
    console.log(test)
  }

  useEffect(() => {
    setNumbers()
  })

  return (
    <Container>
      <Card>
        <TrackOrder orderNumber={orderNumber} codTracker={codTracker} />
        <TrackImg />
        <TrackMsg />
        <TrackBar active />
      </Card>
    </Container>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Home)
