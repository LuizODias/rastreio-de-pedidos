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
  const [tenant, setTenant] = useState<String>('')
  const [order, setOrder] = useState<String>('')
  const [client, setClient] = useState<String>('')

  const { location } = props
  const { search } = location
  const urlParams = new URLSearchParams(search)

  const setNumbers = async () => {
    try {
      setLoading(true)

      setTenant(urlParams.get('tenant')!)
      setOrder(urlParams.get('order')!)
      setClient(urlParams.get('client')!)

      if (order) {
        setStatusOrder(await getStatus(tenant, order, client))
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
  }, [client])

  return (
    <Container>
      <Card>
        {!loading && statusOrder ? (
          <>
            <TrackOrder orderNumber={order} codClient={client} />
            <TrackImg />
            <TrackMsg />
            <TrackBar active={statusOrder} />
          </>
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
