import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import { Header, Home } from '../containers'
import { connect } from 'react-redux'

function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/consulta" component={Home} />
    </Router>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Routes)
