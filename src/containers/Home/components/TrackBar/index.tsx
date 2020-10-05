import React from 'react'
import {
  TrackingProgressBarItem,
  TrackingProgressBarItemBar,
  Checked,
  Circle,
} from './styles'

const TrackBar = ({ active }) => {
  return (
    <>
      {active?.error ? (
        <TrackingProgressBarItem>
          ERRO! Não conseguimos achar nenhum pedido com esses dados.{' '}
        </TrackingProgressBarItem>
      ) : (
        <TrackingProgressBarItem>
          <TrackingProgressBarItem
            className="item"
            first
            active={active.processado}
          >
            {active.processado ? <Checked /> : <Circle />}
          </TrackingProgressBarItem>

          <TrackingProgressBarItemBar
            className="bar"
            active={active.despachado}
          />

          <TrackingProgressBarItem className="item" active={active.despachado}>
            {active.despachado ? <Checked /> : <Circle />}
          </TrackingProgressBarItem>

          <TrackingProgressBarItemBar
            className="bar"
            active={active.transito}
          />

          <TrackingProgressBarItem className="item" active={active.transito}>
            {active.transito ? <Checked /> : <Circle />}
          </TrackingProgressBarItem>

          <TrackingProgressBarItemBar
            className="bar"
            active={active.entregue}
          />

          <TrackingProgressBarItem className="item" active={active.entregue}>
            {active.entregue ? <Checked /> : <Circle />}
          </TrackingProgressBarItem>
        </TrackingProgressBarItem>
      )}
    </>
  )
}

export default TrackBar
