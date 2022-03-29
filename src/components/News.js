import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
      <>
<div className="container">
    <div className="row">

        <div className="col-md-4">
        <Newsitems title="main news" description="here is decription of news"/>
        </div>

        <div className="col-md-4">
        <Newsitems title="main news" description="here is decription of news"/>
        </div>

        <div className="col-md-4">
        <Newsitems title="main news" description="here is decription of news"/>
        </div>


    </div>
      <h3>News </h3>
      <Newsitems title="main news" description="here is decription of news"/>
      <Newsitems />
      </div>
      </>
    )
  }
}
