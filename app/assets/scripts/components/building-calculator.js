import React from 'react'
import Nouislider from 'react-nouislider'

import buildingData from '../../data/buildings.json'
import { selectConversion } from '../actions'
import { shortenNumber } from '../utils/format'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    attributes: React.PropTypes.object,
    selectedCode: React.PropTypes.object,
    conversion: React.PropTypes.string
  },

  selectConversion: function (conversion) {
    this.props.dispatch(selectConversion(conversion))
  },

  render: function () {
    // Country codes not yet added to Mapbox data; hardcoding a country code for now

    const countryCode = 'GT-JU' // this.props.selectedCode
    const data = buildingData[countryCode][this.props.conversion]

    return (
      <section className='calculator'>
        <h2 className='calculator__title'>Building Stock Conversion Calculator</h2>
        <div className='calculator__container'>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Conversion Type:</dt>
            <dd className='calculator__radio'>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='retrofit'
                       defaultChecked={this.props.conversion === 'retrofit'}
                       onClick={() => this.selectConversion('retrofit')} />
                <span>Retrofit</span>
               </label>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='replacement'
                       defaultChecked={this.props.conversion === 'replacement'}
                       onClick={() => this.selectConversion('replacement')} />
                <span>Replace</span>
              </label>
            </dd>
          </dl>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Amount Converted:</dt>
            <dd className='calculator__slider'>
            <Nouislider
              range={{min: 0, max: 100}}
              start={[40]}
              step={5}
              pips={{mode: 'range', density: 20}}
            />
            </dd>
          </dl>
          <div className='calculator__description top'>
            Wood braced frame with load-bearing infill wall system single family - on stilts
          </div>
          <div className='calculator__divider-broken left'></div>
          <div className='calculator__divider-broken-label'>are converted into</div>
          <div className='calculator__divider-broken right'></div>
          <div className='calculator__description bottom'>
            Waffle Houses just stacked one on top of the other
          </div>
          <div className='calculator__divider'></div>
          <dl className='stats'>
            <dt className='stat__attribute'>Conversion Cost</dt>
            <dd className='stat__value'>${Math.round(data.conversionCost)} Million</dd>
            <dt className='stat__attribute'>Reduction of AAL</dt>
            <dd className='stat__value'>${shortenNumber((1 - data.overallChangeAAL) * this.props.attributes.AAL, 0, false)}</dd>
            <dt className='stat__attribute'>Change in AAL for these buildings</dt>
            <dd className='stat__value'>{data.buildingChangeAAL * 100}%</dd>
            <dt className='stat__attribute'>Change in overall AAL</dt>
            <dd className='stat__value'>{data.overallChangeAAL * 100}%</dd>
            <dt className='stat__attribute'>Flat rate years to break even</dt>
            <dd className='stat__value stat__value--last stat__value--positive'>{Math.round(data.breakEven)} Years</dd>
          </dl>
        </div>
      </section>
    )
  }
})

export default Results
