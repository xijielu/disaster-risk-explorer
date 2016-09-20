import React from 'react'

import { toggleCalculator } from '../actions'
import BarChart from './charts/bar-chart'
import BuildingCalculator from './building-calculator'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    calculatorOpen: React.PropTypes.bool,
    data: React.PropTypes.object
  },

  openCalculator: function () {
    this.props.dispatch(toggleCalculator(true))
  },

  deleteThis: function () {
    return (
      <section className='results'>
        <h2 className='results__title'>Title</h2>
          <div className='results__container'>
            <h3 className='subtitle results__subtitle'>This is a dummy title</h3>
            <p>More dummy content</p>
          </div>
      </section>
    )
  },

  render: function () {
    const buildingCalculator = this.props.calculatorOpen ? <BuildingCalculator /> : ''

    let d = this.props.data
    if (d === null) {
      return this.deleteThis()
    }

    let data = [
      {value: 10, name: '10'},
      {value: 20, name: '25'},
      {value: 45, name: '50'},
      {value: 66, name: '100'},
      {value: 88, name: '200'}
    ]
    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }
    // <pre>{JSON.stringify(d, null, '  ')}</pre>
    return (
      <div>
        {buildingCalculator}
        <section className='results'>
          <h2 className='results__title'>{d.NAME_0} <button className='button button_results results__download'><i className='collecticon collecticon-download' />Download Profile</button></h2>
            <div className='results__container'>
              <h3 className='subtitle results__subtitle'>Exposure</h3>
              <dl className='stats'>
                <dt className='stat__attribute'>GDP</dt>
                <dd className='stat__value'>$63.79 billion</dd>
                <dt className='stat__attribute'>Building Stock Exposure</dt>
                <dd className='stat__value'>$19 Billion</dd>
              </dl>

              <div className='results__divider results__divider--first'></div>

              <h3 className='subtitle results__subtitle results__subtitle--secondary'>Loss</h3>
              <dl className='stats'>
                <dt className='stat__attribute'>Average Annual Loss</dt>
                <dd className='stat__value'>${d.AAL}</dd>
                <dt className='stat__attribute'>Probable loss over time</dt>
                <dd className='stat__value stat__value--chart stat__value--last'>
                  <BarChart
                    data={data}
                    margin={margin}
                    yTitle='Millions (US$)'
                    xTitle='Return Period'
                  />
                </dd>
              </dl>

              <div className='results__divider results__divider--second'></div>

              <h3 className='subtitle results__subtitle results__subtitle--secondary'>Risk</h3>
              <article className='calculator__link-container'>
                <a href='#' onClick={this.openCalculator}>Building Stock Conversion Calculator</a>
              </article>

            </div>
        </section>
      </div>
    )
  }
})

export default Results
