import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TrackBar, TrackImg, TrackMsg, TrackOrder } from './components'
import { Card, Container, DivLoading, Loading } from './styles'
import { getStatus } from '../../services'

function Home(props) {
  const [statusOrder, setStatusOrder] = useState<{
    error: Boolean
    despachado: Boolean
    entregue: Boolean
    processado: Boolean
    transito: Boolean
  }>()
  const [loading, setLoading] = useState<Boolean>(true)

  const { match } = props
  let { order, tracker } = match.params

  const setNumbers = async () => {
    try {
      setLoading(true)
      if (order) {
        setStatusOrder(await getStatus(order, tracker))
      }
    } catch (error) {
      setStatusOrder({
        error: true,
        despachado: false,
        entregue: false,
        processado: false,
        transito: false,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setNumbers()
    // eslint-disable-next-line
  }, [tracker])

  return (
    <Container>
      <Card>
        <TrackOrder orderNumber={order} codTracker={tracker} />
        <TrackImg />
        <TrackMsg />
        {!loading ? (
          <TrackBar active={statusOrder} />
        ) : (
          <DivLoading>
            <Loading />
          </DivLoading>
        )}
      </Card>
    </Container>
  )
}
const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Home)
