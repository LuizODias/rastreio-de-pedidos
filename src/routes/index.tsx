import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Header, Home } from '../containers'
import { connect } from 'react-redux'

function Routes() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  )
}

// eslint-disable-next-line
const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(Routes)
