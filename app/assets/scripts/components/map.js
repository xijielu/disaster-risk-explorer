import React from 'react'
import mapboxgl from 'mapbox-gl'

import { mapSources, columnMap, inactiveLegends, hoverLegend } from '../constants'
// import { updateHovered, updateSelected } from '../actions'
import { updateSelected } from '../actions'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapSource: React.PropTypes.object
  },

  getLegendStops: function (risk) {
    return inactiveLegends[risk]
  },

  getColorProperty: function (risk) {
    return columnMap[risk]
  },

  componentDidMount: function () {
    this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
    this.mapCenter = [-86, 13]

    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv',
      center: this.mapCenter,
      zoom: 5.5,
      minZoom: 2
    })

    map.on('load', () => {
      let risk = this.props.dataSelection.risk.getActive().key
      Object.keys(mapSources).forEach((id) => {
        const source = mapSources[id]
        let visibility = this.activeSource.sourceLayer === source.sourceLayer ? 'visible' : 'none'

        this._map.addSource(id, {
          type: 'vector',
          url: source.url
        })

        this._addLayer(`${id}-inactive`, source.sourceLayer, id, ['!=', id, ''], visibility, this.getColorProperty(risk), this.getLegendStops(risk))
        this._addLayer(`${id}-hover`, source.sourceLayer, id, ['==', id, ''], visibility, this.getColorProperty(risk), hoverLegend)
        this._addOutlineLayer(`${id}-active`, source.sourceLayer, id, ['==', id, ''], visibility)
      })

      map.on('mousemove', this._mouseMove)
      map.on('click', this._mapClick)
    })
  },

  componentWillReceiveProps: function (nextProps) {
    const prevSourceName = this.props.dataSelection.admin.getActive().key
    const nextSourceName = nextProps.dataSelection.admin.getActive().key
    if (nextSourceName !== prevSourceName) {
      this._toggleSource(prevSourceName, nextSourceName)
    }

    const prevColorProp = this.props.dataSelection.risk.getActive().key
    const nextColorProp = nextProps.dataSelection.risk.getActive().key
    if (nextColorProp !== prevColorProp) {
      this._toggleLayerProperties(prevColorProp, nextColorProp, prevSourceName, nextSourceName)
    }

    // Done with switching. Update the active source
    this.activeSource = mapSources[nextSourceName]
  },

  _mapClick: function (e) {
    let sourceId = this.activeSource.id
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._selectFeature(features[0])
    } else {
      this._deselectFeature()
    }
  },

  _selectFeature: function (feature) {
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, feature.properties[this.activeSource.idProp]])
    this.props.dispatch(updateSelected(feature.properties))
  },

  _deselectFeature: function () {
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, ''])
    this.props.dispatch(updateSelected(null))
  },

  _mouseMove: function (e) {
    let sourceId = this.activeSource.id
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
    }
  },

  _highlightFeature: function (feature) {
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, feature.properties[this.activeSource.idProp]])
    // this.props.dispatch(updateHovered(feature))
  },

  _unhighlightFeature: function () {
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, ''])
    // this.props.dispatch(updateHovered())
  },

  _toggleSource: function (prevSource, nextSource) {
    ['-inactive', '-hover', '-active'].forEach((type) => {
      this._map.setLayoutProperty(prevSource + type, 'visibility', 'none')
      this._map.setLayoutProperty(nextSource + type, 'visibility', 'visible')
    })
  },

  _toggleLayerProperties: function (prevColorProp, nextColorProp, prevSourceName, nextSourceName) {
    // Remove old layers
    ['-inactive', '-hover', '-active'].forEach((type) => {
      this._map.removeLayer(prevSourceName + type)
    })

    const nextSource = mapSources[nextSourceName]
    let id = nextSource.id

    this._addLayer(`${id}-inactive`, nextSource.sourceLayer, id, ['!=', id, ''], 'visible', this.getColorProperty(nextColorProp), this.getLegendStops(nextColorProp))
    this._addLayer(`${id}-hover`, nextSource.sourceLayer, id, ['==', id, ''], 'visible', this.getColorProperty(nextColorProp), hoverLegend)
    this._addOutlineLayer(`${id}-active`, nextSource.sourceLayer, id, ['==', id, ''], 'visible')
  },

  _addLayer: function (id, layer, source, filter, visibility, colorProperty, colorScale) {
    this._map.addLayer({
      'id': id,
      'type': 'fill',
      'source': source,
      'source-layer': layer,
      'filter': filter,
      'layout': {
        'visibility': visibility
      },
      'paint': {
        'fill-color': {
          property: colorProperty,
          stops: colorScale
        },
        'fill-opacity': 0.8,
        'fill-outline-color': 'rgb(140, 140, 160)'
      }
    })
  },

  _addOutlineLayer: function (id, layer, source, filter, visibility) {
    this._map.addLayer({
      'id': id,
      'type': 'line',
      'source': source,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'line-color': 'rgb(50, 50, 90)',
        'line-width': 2
      }
    })
  },

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map
