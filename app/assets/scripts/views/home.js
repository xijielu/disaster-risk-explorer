'use strict'
import React from 'react'
import { connect } from 'react-redux'

import DataSelection from '../utils/data-selection'
import { mapSources } from '../constants'

import About from '../components/about-modal.js'
import Header from '../components/header.js'
import Map from '../components/map.js'
import Legend from '../components/legend.js'
import Selection from '../components/selection-panel.js'
import Results from '../components/results-panel.js'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    mapData: React.PropTypes.string,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.object,

    modalAbout: React.PropTypes.object
  },

  render: function () {
    const dataSelection = DataSelection(this.props.location.query)
    const mapSource = mapSources[dataSelection.admin.getActive().key]
    return (
      <div>
        <Header
         dispatch={this.props.dispatch}
         queryParams={this.props.location.query} />
        <Map
          mapSource={mapSource}
          dataSelection={dataSelection}
          selected={this.props.selected}
          dispatch={this.props.dispatch} />
        <Selection
          queryParams={this.props.location.query}
          mapSource={this.props.mapSource}
          dispatch={this.props.dispatch} />
        <Legend dataSelection={dataSelection}/>
        <Results
          data={this.props.selected} />
        <About
          dispatch={this.props.dispatch}
          visible={this.props.modalAbout.visible} />
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
    mapSource: state.map.mapSource,
    hovered: state.map.hovered,
    selected: state.map.selected,
    modalAbout: state.modalAbout
  }
}

module.exports = connect(mapStateToProps)(Home)
