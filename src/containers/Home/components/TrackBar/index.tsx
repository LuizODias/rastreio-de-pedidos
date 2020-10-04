import React from 'react'
import {
  TrackingProgressBarItem,
  TrackingProgressBarItemBar,
  Checked,
  Circle,
} from './styles'

const TrackBar = ({ active }) => {
  return (
    <TrackingProgressBarItem>
      <TrackingProgressBarItem className="item" first active={active}>
        {active ? <Checked /> : <Circle />}
      </TrackingProgressBarItem>

      <TrackingProgressBarItemBar className="bar" active={active} />

      <TrackingProgressBarItem className="item" active={active}>
        {active ? <Checked /> : <Circle />}
      </TrackingProgressBarItem>

      <TrackingProgressBarItemBar className="bar" active={active} />

      <TrackingProgressBarItem className="item" active={active}>
        {active ? <Checked /> : <Circle />}
      </TrackingProgressBarItem>

      <TrackingProgressBarItemBar className="bar" />

      <TrackingProgressBarItem className="item">
        {!active ? <Checked /> : <Circle />}
      </TrackingProgressBarItem>
    </TrackingProgressBarItem>
  )
}

export default TrackBar
