import React from 'react'
import { legends, mapSettings } from '../constants'

import { shortenNumber } from '../utils/format'
import { getMapId, getMapDescrip } from '../utils/map-id'
import { t } from '../utils/i18n'

const Legend = React.createClass({
  propTypes: {
    dataSelection: React.PropTypes.object
  },

  render: function () {
    const dataSelection = this.props.dataSelection
    const activeSource = this.props.dataSelection.admin.getActive().key
    const mapId = getMapId(dataSelection)
    const title = getMapDescrip(dataSelection)
    let metric = dataSelection.metric.getActive().key
    metric = metric.charAt(0).toUpperCase() + metric.slice(1)

    // Slice removes the years from disaster and loss columns, since legends
    // statistics are currently derived from all years' data.
    const legendId = mapId.substr(mapId.length - 3) === 'AAL' ? mapId : mapId.slice(0, 5)
    const legend = legends[activeSource][legendId]
    let opacity = this.props.dataSelection.opacity.getActive().key
    opacity = mapSettings.opacityLevels[opacity]

    const legendBlocks = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__category'
          style={{width: 100 / legend.length + '%',
                  backgroundColor: cat[1],
                  opacity: opacity}}>
        </span>
      )
    })
    const legendLabels = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__label'
          style={{width: 100 / legend.length + '%'}}>
            {shortenNumber(cat[0])}
        </span>
      )
    })
    return (
      <section className='legend'>
        <h2 className='legend__title'>{title}</h2>
        <figure className='legend__scale'>
          {legendBlocks}
          {legendLabels}
          <figcaption className='legend__caption'>
              <p>{t('View') + ' ' + metric + ' ' + t('by:')}</p>
              <div className='button header__language--toggle button__leftside button--active'><span className='header__language--text'>{t('Absolute') + ' ' + metric}</span></div>
              <div className='button header__language--toggle button__rightside'><span className='header__language--text'>{t('Relative') + ' ' + metric}</span></div>
          </figcaption>
        </figure>
      </section>
    )
  }
})

export default Legend
