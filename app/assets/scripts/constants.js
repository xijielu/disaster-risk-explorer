import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'CA_Earthquake_Admin_0-3k2o2l',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.8r149eiv'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'CA_Earthquake_Admin_1-8hvttj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.2j87qn16'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'merged-grid-8m14pc',
    idProp: 'code',
    url: 'mapbox://devseed.1r0ke7hy'
  }
}

export const mapSettings = {
  basemap: {
    basic: {
      id: 'basic',
      url: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv'},
    special: {
      id: 'satellite',
      url: 'mapbox://mapbox.satellite'}
  },
  centerpoint: [-86, 13],
  initialZoom: {
    admin0: 5.75,
    admin1: 5.75,
    km10: 11
  },
  selectedZoom: {
    admin0: 5.75,
    admin1: 5.75,
    km10: 13
  },
  maxBounds: [
    [-102.2223587036132, 2.499026775360178],
    [-70.869861602783146, 21.525140762329187]
  ],
  opacityLevels: {
    full: 0.8,
    medium: 0.4,
    low: 0.15
  }
}

const makeLegend = (scale, steps) => {
  return steps.map((step, i) => [step, scale(i / (steps.length - 1)).hex()])
}
const inactiveScale = chroma.scale(['rgb(200, 200, 255)', 'rgb(40, 40, 80)'])
const hoverScale = chroma.scale(['rgb(200, 240, 240)', 'rgb(40, 80, 80)'])

export const inactiveLegends = {
  hurricane: makeLegend(inactiveScale,
    [450000, 1500000, 4500000, 13500000, 26000000, 250000000]),
  earthquake: makeLegend(inactiveScale,
    [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000])
}
export const hoverLegend = makeLegend(hoverScale,
  [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000])

// Used in beta to map disasters to different RP columns
export const columnMap = {earthquake: 'RP_10', hurricane: 'RP_500', flood: 'AAL'}

export const legends = {
  HZ_EQ_1000:
   [ [ 0, '#c8c8ff' ],
     [ 0, '#a8a8dc' ],
     [ 179, '#8888b9' ],
     [ 284, '#686896' ],
     [ 416, '#484873' ],
     [ 537, '#282850' ],
     [ 912, '#282850' ] ],
  HZ_EQ_100:
   [ [ 0, '#c8c8ff' ],
     [ 0, '#a8a8dc' ],
     [ 63, '#8888b9' ],
     [ 121, '#686896' ],
     [ 179, '#484873' ],
     [ 248, '#282850' ],
     [ 423, '#282850' ] ],
  HZ_EQ_2500:
   [ [ 0, '#c8c8ff' ],
     [ 0, '#a8a8dc' ],
     [ 245, '#8888b9' ],
     [ 375, '#686896' ],
     [ 555, '#484873' ],
     [ 700, '#282850' ],
     [ 1193, '#282850' ] ],
  HZ_EQ_5000:
   [ [ 0, '#c8c8ff' ],
     [ 0, '#a8a8dc' ],
     [ 304, '#8888b9' ],
     [ 456, '#686896' ],
     [ 686, '#484873' ],
     [ 843, '#282850' ],
     [ 1431, '#282850' ] ],
  HZ_EQ_500:
   [ [ 0, '#c8c8ff' ],
     [ 0, '#a8a8dc' ],
     [ 137, '#8888b9' ],
     [ 224, '#686896' ],
     [ 329, '#484873' ],
     [ 434, '#282850' ],
     [ 738, '#282850' ] ],
  HZ_EQ_250:
   [ [ 43, '#c8c8ff' ],
     [ 69, '#a8a8dc' ],
     [ 99, '#8888b9' ],
     [ 110, '#686896' ],
     [ 123, '#484873' ],
     [ 164, '#282850' ],
     [ 276, '#282850' ] ],
  EX_GD:
   [ [ 94, '#c8c8ff' ],
     [ 3842, '#a8a8dc' ],
     [ 13587, '#8888b9' ],
     [ 28180, '#686896' ],
     [ 54079, '#484873' ],
     [ 108663, '#282850' ],
     [ 570282752, '#282850' ] ],
  EX_IN:
   [ [ 8, '#c8c8ff' ],
     [ 39150, '#a8a8dc' ],
     [ 73110, '#8888b9' ],
     [ 136173, '#686896' ],
     [ 199851, '#484873' ],
     [ 361490, '#282850' ],
     [ 2147483647, '#282850' ] ],
  EX_BS:
   [ [ 0, '#c8c8ff' ],
     [ 201026, '#a8a8dc' ],
     [ 399959, '#8888b9' ],
     [ 642350, '#686896' ],
     [ 1214558, '#484873' ],
     [ 2800514, '#282850' ],
     [ 360561001, '#282850' ] ],
  HZ_FL_1000:
   [ [ 1, '#c8c8ff' ],
     [ 7, '#a8a8dc' ],
     [ 12, '#8888b9' ],
     [ 18, '#686896' ],
     [ 27, '#484873' ],
     [ 38, '#282850' ],
     [ 191, '#282850' ] ],
  HZ_FL_1000_R:
   [ [ 1, '#c8c8ff' ],
     [ 7, '#a8a8dc' ],
     [ 12, '#8888b9' ],
     [ 18, '#686896' ],
     [ 27, '#484873' ],
     [ 38, '#282850' ],
     [ 191, '#282850' ] ],
  HZ_FL_100:
   [ [ 1, '#c8c8ff' ],
     [ 5, '#a8a8dc' ],
     [ 8, '#8888b9' ],
     [ 12, '#686896' ],
     [ 18, '#484873' ],
     [ 26, '#282850' ],
     [ 149, '#282850' ] ],
  HZ_FL_100_R:
   [ [ 1, '#c8c8ff' ],
     [ 5, '#a8a8dc' ],
     [ 8, '#8888b9' ],
     [ 12, '#686896' ],
     [ 18, '#484873' ],
     [ 26, '#282850' ],
     [ 149, '#282850' ] ],
  HZ_FL_10:
   [ [ 1, '#c8c8ff' ],
     [ 2, '#a8a8dc' ],
     [ 4, '#8888b9' ],
     [ 6, '#686896' ],
     [ 9, '#484873' ],
     [ 13, '#282850' ],
     [ 95, '#282850' ] ],
  HZ_FL_10_R:
   [ [ 1, '#c8c8ff' ],
     [ 2, '#a8a8dc' ],
     [ 4, '#8888b9' ],
     [ 6, '#686896' ],
     [ 9, '#484873' ],
     [ 13, '#282850' ],
     [ 95, '#282850' ] ],
  HZ_FL_250:
   [ [ 1, '#c8c8ff' ],
     [ 6, '#a8a8dc' ],
     [ 10, '#8888b9' ],
     [ 15, '#686896' ],
     [ 22, '#484873' ],
     [ 31, '#282850' ],
     [ 167, '#282850' ] ],
  HZ_FL_250_R:
   [ [ 1, '#c8c8ff' ],
     [ 6, '#a8a8dc' ],
     [ 10, '#8888b9' ],
     [ 15, '#686896' ],
     [ 22, '#484873' ],
     [ 31, '#282850' ],
     [ 167, '#282850' ] ],
  HZ_FL_25:
   [ [ 1, '#c8c8ff' ],
     [ 3, '#a8a8dc' ],
     [ 6, '#8888b9' ],
     [ 8, '#686896' ],
     [ 13, '#484873' ],
     [ 19, '#282850' ],
     [ 119, '#282850' ] ],
  HZ_FL_25_R:
   [ [ 1, '#c8c8ff' ],
     [ 3, '#a8a8dc' ],
     [ 6, '#8888b9' ],
     [ 8, '#686896' ],
     [ 13, '#484873' ],
     [ 19, '#282850' ],
     [ 119, '#282850' ] ],
  HZ_FL_500:
   [ [ 1, '#c8c8ff' ],
     [ 7, '#a8a8dc' ],
     [ 11, '#8888b9' ],
     [ 17, '#686896' ],
     [ 24, '#484873' ],
     [ 34, '#282850' ],
     [ 179, '#282850' ] ],
  HZ_FL_500_R:
   [ [ 1, '#c8c8ff' ],
     [ 7, '#a8a8dc' ],
     [ 11, '#8888b9' ],
     [ 17, '#686896' ],
     [ 24, '#484873' ],
     [ 34, '#282850' ],
     [ 179, '#282850' ] ],
  HZ_FL_50:
   [ [ 1, '#c8c8ff' ],
     [ 4, '#a8a8dc' ],
     [ 7, '#8888b9' ],
     [ 10, '#686896' ],
     [ 15, '#484873' ],
     [ 23, '#282850' ],
     [ 135, '#282850' ] ],
  HZ_FL_50_R:
   [ [ 1, '#c8c8ff' ],
     [ 4, '#a8a8dc' ],
     [ 7, '#8888b9' ],
     [ 10, '#686896' ],
     [ 15, '#484873' ],
     [ 23, '#282850' ],
     [ 135, '#282850' ] ],
  HZ_FL_5:
   [ [ 1, '#c8c8ff' ],
     [ 2, '#a8a8dc' ],
     [ 2, '#8888b9' ],
     [ 3, '#686896' ],
     [ 5, '#484873' ],
     [ 8, '#282850' ],
     [ 67, '#282850' ] ],
  HZ_FL_5_R:
   [ [ 1, '#c8c8ff' ],
     [ 2, '#a8a8dc' ],
     [ 2, '#8888b9' ],
     [ 3, '#686896' ],
     [ 5, '#484873' ],
     [ 8, '#282850' ],
     [ 67, '#282850' ] ] }

export const countryExtents = {
  'admin0': {
    'Belize': {
      'extent': [
        [
          -89.22417449951172,
          15.892658233642663
        ],
        [
          -87.48596954345689,
          18.497289657592944
        ]
      ]
    },
    'Costa Rica': {
      'extent': [
        [
          -85.59486389160142,
          8.099026775360178
        ],
        [
          -83.05322265625,
          11.216917991638311
        ]
      ]
    },
    'El Salvador': {
      'extent': [
        [
          -90.12486267089838,
          13.152640342712488
        ],
        [
          -87.68374633789057,
          14.450551033020105
        ]
      ]
    },
    'Grenada': {
      'extent': [
        [
          -61.802082061767436,
          11.984305381774902
        ],
        [
          -61.3781929016113,
          12.54013824462892
        ]
      ]
    },
    'Guatemala': {
      'extent': [
        [
          -92.2223587036132,
          13.73828220367443
        ],
        [
          -88.22566986083984,
          17.81871414184579
        ]
      ]
    },
    'Honduras': {
      'extent': [
        [
          -89.35079193115232,
          12.98453998565681
        ],
        [
          -82.40569305419922,
          17.418472290039347
        ]
      ]
    },
    'Jamaica': {
      'extent': [
        [
          -78.36902618408197,
          17.020414352416964
        ],
        [
          -75.9698638916015,
          18.525140762329187
        ]
      ]
    },
    'Nicaragua': {
      'extent': [
        [
          -87.69097137451163,
          10.707542419433594
        ],
        [
          -81.9998626708983,
          15.02591037750254
        ]
      ]
    },
    'Panama': {
      'extent': [
        [
          -83.05017852783203,
          7.20235919952394
        ],
        [
          -77.17324066162107,
          9.647360801696905
        ]
      ]
    },
    'Saint Lucia': {
      'extent': [
        [
          -61.08013916015619,
          13.707082748413171
        ],
        [
          -60.869861602783146,
          14.110417366027875
        ]
      ]
    }
  },
  'admin1': {
    'Alajuela': {
      'extent': [
        [
          -85.4320220947265,
          9.830496788024874
        ],
        [
          -84.15571594238276,
          11.079315185546903
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Cartago': {
      'extent': [
        [
          -84.08480072021482,
          9.49981498718266
        ],
        [
          -83.311653137207,
          10.149781227111916
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Guanacaste': {
      'extent': [
        [
          -85.96069335937497,
          9.732638359069881
        ],
        [
          -84.77084350585932,
          11.216917991638311
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Heredia': {
      'extent': [
        [
          -84.19553375244138,
          9.962645530700811
        ],
        [
          -83.7065734863281,
          10.789644241333036
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Limón': {
      'extent': [
        [
          -83.94243621826172,
          9.062000274658217
        ],
        [
          -82.55322265625,
          10.93890380859375
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Puntarenas': {
      'extent': [
        [
          -85.59486389160142,
          8.099026775360178
        ],
        [
          -83.05322265625,
          11.216917991638311
        ]
      ],
      'parent': 'Costa Rica'
    },
    'San José': {
      'extent': [
        [
          -84.59282684326169,
          9.07995891571052
        ],
        [
          -83.4251708984375,
          10.191658020019574
        ]
      ],
      'parent': 'Costa Rica'
    },
    'Ahuachapán': {
      'extent': [
        [
          -90.12486267089838,
          13.660684585571417
        ],
        [
          -89.69065856933588,
          14.06437397003171
        ]
      ],
      'parent': 'El Salvador'
    },
    'Cabañas': {
      'extent': [
        [
          -88.98835754394526,
          13.73831176757811
        ],
        [
          -88.48744201660153,
          14.01908588409431
        ]
      ],
      'parent': 'El Salvador'
    },
    'Chalatenango': {
      'extent': [
        [
          -89.42715454101557,
          13.901992797851577
        ],
        [
          -88.68115997314453,
          14.422704696655344
        ]
      ],
      'parent': 'El Salvador'
    },
    'Cuscatlán': {
      'extent': [
        [
          -89.16763305664062,
          13.63346862792973
        ],
        [
          -88.85851287841794,
          14.057420730590948
        ]
      ],
      'parent': 'El Salvador'
    },
    'La Libertad': {
      'extent': [
        [
          -89.62041473388669,
          13.417916297912598
        ],
        [
          -89.1323623657226,
          14.062418937683077
        ]
      ],
      'parent': 'El Salvador'
    },
    'La Paz': {
      'extent': [
        [
          -88.23260498046872,
          13.82276344299325
        ],
        [
          -87.60243225097653,
          14.415310859680304
        ]
      ],
      'parent': 'Honduras'
    },
    'La Unión': {
      'extent': [
        [
          -88.09271240234372,
          13.152640342712488
        ],
        [
          -87.68374633789057,
          13.899357795715446
        ]
      ],
      'parent': 'El Salvador'
    },
    'Morazán': {
      'extent': [
        [
          -88.27196502685541,
          13.539755821228042
        ],
        [
          -87.93933868408197,
          13.986461639404382
        ]
      ],
      'parent': 'El Salvador'
    },
    'San Miguel': {
      'extent': [
        [
          -88.52739715576169,
          13.16724681854258
        ],
        [
          -88.01883697509766,
          13.895735740661692
        ]
      ],
      'parent': 'El Salvador'
    },
    'San Salvador': {
      'extent': [
        [
          -89.28889465332028,
          13.468975067138729
        ],
        [
          -88.98754882812497,
          14.05667114257814
        ]
      ],
      'parent': 'El Salvador'
    },
    'San Vicente': {
      'extent': [
        [
          -88.89415740966791,
          13.235693931579576
        ],
        [
          -88.4848480224608,
          13.793494224548411
        ]
      ],
      'parent': 'El Salvador'
    },
    'Santa Ana': {
      'extent': [
        [
          -89.74167633056635,
          13.772410392761287
        ],
        [
          -89.2479629516601,
          14.450551033020105
        ]
      ],
      'parent': 'El Salvador'
    },
    'Sonsonate': {
      'extent': [
        [
          -89.95124816894531,
          13.518193244934125
        ],
        [
          -89.4387817382812,
          13.906028747558636
        ]
      ],
      'parent': 'El Salvador'
    },
    'Usulután': {
      'extent': [
        [
          -88.80343627929679,
          13.15875053405773
        ],
        [
          -88.12069702148429,
          13.692082405090318
        ]
      ],
      'parent': 'El Salvador'
    },
    'Alta Verapaz': {
      'extent': [
        [
          -90.81743621826158,
          15.119660377502456
        ],
        [
          -89.40629577636716,
          16.074132919311637
        ]
      ],
      'parent': 'Guatemala'
    },
    'Baja Verapaz': {
      'extent': [
        [
          -90.8090438842772,
          14.873027801513786
        ],
        [
          -89.90198516845697,
          15.294076919555735
        ]
      ],
      'parent': 'Guatemala'
    },
    'Chimaltenango': {
      'extent': [
        [
          -91.13054656982419,
          14.373419761657686
        ],
        [
          -90.61563110351557,
          14.93870258331296
        ]
      ],
      'parent': 'Guatemala'
    },
    'Chiquimula': {
      'extent': [
        [
          -89.73220825195312,
          14.406201362609863
        ],
        [
          -89.12673950195307,
          14.952419281005831
        ]
      ],
      'parent': 'Guatemala'
    },
    'El Progreso': {
      'extent': [
        [
          -90.40343475341791,
          14.648487091064524
        ],
        [
          -89.7806015014647,
          15.140331268310561
        ]
      ],
      'parent': 'Guatemala'
    },
    'Escuintla': {
      'extent': [
        [
          -91.53889465332017,
          13.911251068115263
        ],
        [
          -90.50906372070312,
          14.476391792297363
        ]
      ],
      'parent': 'Guatemala'
    },
    'Guatemala': {
      'extent': [
        [
          -90.75956726074216,
          14.256637573242273
        ],
        [
          -90.20348358154294,
          14.918847084045453
        ]
      ],
      'parent': 'Guatemala'
    },
    'Huehuetenango': {
      'extent': [
        [
          -92.11925506591797,
          15.133956909179716
        ],
        [
          -90.9573974609375,
          16.081890106201257
        ]
      ],
      'parent': 'Guatemala'
    },
    'Izabal': {
      'extent': [
        [
          -89.66154479980469,
          15.070316314697266
        ],
        [
          -88.22566986083984,
          15.966528892517147
        ]
      ],
      'parent': 'Guatemala'
    },
    'Jalapa': {
      'extent': [
        [
          -90.27775573730455,
          14.429879188537711
        ],
        [
          -89.6483459472656,
          14.871861457824778
        ]
      ],
      'parent': 'Guatemala'
    },
    'Jutiapa': {
      'extent': [
        [
          -90.29877471923828,
          13.73828220367443
        ],
        [
          -89.49375152587888,
          14.563303947448716
        ]
      ],
      'parent': 'Guatemala'
    },
    'Petén': {
      'extent': [
        [
          -91.43796539306635,
          15.850934028625574
        ],
        [
          -89.14615631103516,
          17.81871414184579
        ]
      ],
      'parent': 'Guatemala'
    },
    'Quetzaltenango': {
      'extent': [
        [
          -92.14001464843747,
          14.494300842285242
        ],
        [
          -91.40355682373041,
          15.224425315857033
        ]
      ],
      'parent': 'Guatemala'
    },
    'Quiché': {
      'extent': [
        [
          -91.32616424560547,
          14.801934242248578
        ],
        [
          -90.41609191894531,
          16.073883056640625
        ]
      ],
      'parent': 'Guatemala'
    },
    'Retalhuleu': {
      'extent': [
        [
          -92.16429138183588,
          14.125709533691406
        ],
        [
          -91.51741790771479,
          14.715660095214858
        ]
      ],
      'parent': 'Guatemala'
    },
    'Sacatepéquez': {
      'extent': [
        [
          -90.87999725341783,
          14.377620697021527
        ],
        [
          -90.60292816162104,
          14.72191238403326
        ]
      ],
      'parent': 'Guatemala'
    },
    'San Marcos': {
      'extent': [
        [
          -92.2223587036132,
          14.486250877380442
        ],
        [
          -91.56922149658189,
          15.41991996765148
        ]
      ],
      'parent': 'Guatemala'
    },
    'Santa Rosa': {
      'extent': [
        [
          -90.62419891357416,
          13.803266525268683
        ],
        [
          -90.04692077636719,
          14.521224975586051
        ]
      ],
      'parent': 'Guatemala'
    },
    'Sololá': {
      'extent': [
        [
          -91.50664520263666,
          14.515316963195815
        ],
        [
          -91.06850433349601,
          14.893421173095803
        ]
      ],
      'parent': 'Guatemala'
    },
    'Suchitepéquez': {
      'extent': [
        [
          -91.66778564453125,
          14.044810295105066
        ],
        [
          -91.09429168701158,
          14.710862159728961
        ]
      ],
      'parent': 'Guatemala'
    },
    'Totonicapán': {
      'extent': [
        [
          -91.55734252929688,
          14.821034431457505
        ],
        [
          -91.17531585693351,
          15.249397277832102
        ]
      ],
      'parent': 'Guatemala'
    },
    'Zacapa': {
      'extent': [
        [
          -89.89299774169922,
          14.73249626159678
        ],
        [
          -89.14773559570307,
          15.299084663391156
        ]
      ],
      'parent': 'Guatemala'
    },
    'Atlántida': {
      'extent': [
        [
          -87.80868530273432,
          15.410251617431854
        ],
        [
          -86.39098358154294,
          15.927638053894043
        ]
      ],
      'parent': 'Honduras'
    },
    'Choluteca': {
      'extent': [
        [
          -87.51430511474607,
          12.98453998565681
        ],
        [
          -86.7025451660156,
          13.763493537902889
        ]
      ],
      'parent': 'Honduras'
    },
    'Colón': {
      'extent': [
        [
          -80.87657165527344,
          8.632670402526912
        ],
        [
          -79.08027648925776,
          9.647360801696905
        ]
      ],
      'parent': 'Panama'
    },
    'Comayagua': {
      'extent': [
        [
          -88.08045196533195,
          14.035907745361456
        ],
        [
          -87.23373413085935,
          15.049070358276424
        ]
      ],
      'parent': 'Honduras'
    },
    'Copán': {
      'extent': [
        [
          -89.22222137451166,
          14.481278419494643
        ],
        [
          -88.63047790527341,
          15.289088249206557
        ]
      ],
      'parent': 'Honduras'
    },
    'Cortés': {
      'extent': [
        [
          -88.43440246582028,
          14.784558296203727
        ],
        [
          -87.7306518554687,
          16.000139236450224
        ]
      ],
      'parent': 'Honduras'
    },
    'El Paraíso': {
      'extent': [
        [
          -87.22519683837882,
          13.497464179992775
        ],
        [
          -85.57481384277341,
          14.411850929260268
        ]
      ],
      'parent': 'Honduras'
    },
    'Francisco Morazán': {
      'extent': [
        [
          -87.65587615966788,
          13.64780330657969
        ],
        [
          -86.72419738769528,
          15.020076751709084
        ]
      ],
      'parent': 'Honduras'
    },
    'Gracias a Dios': {
      'extent': [
        [
          -84.99811553955064,
          14.614527702331628
        ],
        [
          -83.10569305419922,
          16.318472290039347
        ]
      ],
      'parent': 'Honduras'
    },
    'Intibucá': {
      'extent': [
        [
          -88.51215362548828,
          13.850329399108858
        ],
        [
          -87.83977508544916,
          14.647224426269574
        ]
      ],
      'parent': 'Honduras'
    },
    'Islas de la Bahía': {
      'extent': [
        [
          -87.00013732910148,
          15.952083587646484
        ],
        [
          -85.81569671630845,
          16.517084121704187
        ]
      ],
      'parent': 'Honduras'
    },
    'Lempira': {
      'extent': [
        [
          -88.97695159912107,
          13.939386367797837
        ],
        [
          -88.30945587158197,
          14.929738998413214
        ]
      ],
      'parent': 'Honduras'
    },
    'Ocotepeque': {
      'extent': [
        [
          -89.35079193115232,
          14.210660934448356
        ],
        [
          -88.70933532714838,
          14.713985443115192
        ]
      ],
      'parent': 'Honduras'
    },
    'Olancho': {
      'extent': [
        [
          -87.01361083984361,
          14.046360015869226
        ],
        [
          -84.99401855468736,
          15.579616546630888
        ]
      ],
      'parent': 'Honduras'
    },
    'Santa Bárbara': {
      'extent': [
        [
          -88.7609252929687,
          14.629145622253432
        ],
        [
          -87.98922729492185,
          15.541818618774471
        ]
      ],
      'parent': 'Honduras'
    },
    'Valle': {
      'extent': [
        [
          -87.81185913085935,
          13.248194694519213
        ],
        [
          -87.341567993164,
          13.843179702758874
        ]
      ],
      'parent': 'Honduras'
    },
    'Yoro': {
      'extent': [
        [
          -87.93667602539048,
          14.86168193817143
        ],
        [
          -86.22396087646479,
          15.721937179565458
        ]
      ],
      'parent': 'Honduras'
    },
    'Atlántico Norte': {
      'extent': [
        [
          -85.5135269165039,
          13.026806831359863
        ],
        [
          -81.9998626708983,
          15.02591037750254
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Atlántico Sur': {
      'extent': [
        [
          -85.22826385498044,
          10.918702125549487
        ],
        [
          -82.97013854980466,
          13.293742179870733
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Boaco': {
      'extent': [
        [
          -85.98599243164054,
          12.037051200866713
        ],
        [
          -84.96810913085935,
          12.783634185791044
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Carazo': {
      'extent': [
        [
          -86.44052886962885,
          11.518689155578627
        ],
        [
          -86.08541870117185,
          11.951141357421875
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Chinandega': {
      'extent': [
        [
          -87.69097137451163,
          12.39569377899177
        ],
        [
          -86.65708923339844,
          13.306297302246264
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Chontales': {
      'extent': [
        [
          -85.67638397216794,
          11.615303993225126
        ],
        [
          -84.57212066650388,
          12.64479446411137
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Estelí': {
      'extent': [
        [
          -86.74762725830072,
          12.847483634948745
        ],
        [
          -86.10913848876947,
          13.43193531036377
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Granada': {
      'extent': [
        [
          -86.13493347167969,
          11.600893020629968
        ],
        [
          -85.78551483154297,
          12.190209388732967
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Jinotega': {
      'extent': [
        [
          -86.26229095458979,
          12.984375953674316
        ],
        [
          -84.82464599609361,
          14.607236862182589
        ]
      ],
      'parent': 'Nicaragua'
    },
    'León': {
      'extent': [
        [
          -87.11765289306626,
          12.005662918090934
        ],
        [
          -86.26959228515625,
          13.115758895874066
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Madriz': {
      'extent': [
        [
          -86.76827239990234,
          13.201588630676326
        ],
        [
          -86.06245422363281,
          13.65665721893319
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Managua': {
      'extent': [
        [
          -86.68344879150376,
          11.718199729919405
        ],
        [
          -85.82778167724601,
          12.63101005554212
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Masaya': {
      'extent': [
        [
          -86.28395843505845,
          11.828769683837876
        ],
        [
          -85.9643325805664,
          12.140574455261202
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Matagalpa': {
      'extent': [
        [
          -86.28414916992173,
          12.507350921630973
        ],
        [
          -84.717170715332,
          13.37409496307373
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Nueva Segovia': {
      'extent': [
        [
          -86.7851943969726,
          13.462232589721808
        ],
        [
          -85.82478332519528,
          14.077059745788674
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Río San Juan': {
      'extent': [
        [
          -85.1929931640625,
          10.707542419433594
        ],
        [
          -83.66461181640622,
          11.858178138732995
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Rivas': {
      'extent': [
        [
          -86.1739883422851,
          11.04371738433845
        ],
        [
          -85.18658447265622,
          11.684892654418917
        ]
      ],
      'parent': 'Nicaragua'
    },
    'Bocas del Toro': {
      'extent': [
        [
          -82.93872070312491,
          8.827947616577276
        ],
        [
          -81.91570281982422,
          9.616516113281222
        ]
      ],
      'parent': 'Panama'
    },
    'Chiriquí': {
      'extent': [
        [
          -83.05017852783203,
          7.859303951263399
        ],
        [
          -81.50739288330075,
          8.919561386108413
        ]
      ],
      'parent': 'Panama'
    },
    'Coclé': {
      'extent': [
        [
          -80.82299804687491,
          8.087089538574261
        ],
        [
          -80.05252075195304,
          9.063968658447337
        ]
      ],
      'parent': 'Panama'
    },
    'Darién': {
      'extent': [
        [
          -78.51251220703125,
          7.21842479705839
        ],
        [
          -77.17324066162107,
          9.092749595642076
        ]
      ],
      'parent': 'Panama'
    },
    'Emberá': {
      'extent': [
        [
          -78.3374404907226,
          7.581108093261804
        ],
        [
          -77.23912811279294,
          8.777939796447782
        ]
      ],
      'parent': 'Panama'
    },
    'Herrera': {
      'extent': [
        [
          -80.96334838867188,
          7.510128974914679
        ],
        [
          -80.36624908447263,
          8.13173866271974
        ]
      ],
      'parent': 'Panama'
    },
    'Kuna Yala': {
      'extent': [
        [
          -79.28295135498044,
          8.523670196533331
        ],
        [
          -77.3573608398437,
          9.600419998169158
        ]
      ],
      'parent': 'Panama'
    },
    'Los Santos': {
      'extent': [
        [
          -80.73850250244132,
          7.22735881805427
        ],
        [
          -79.99124908447263,
          8.00402927398693
        ]
      ],
      'parent': 'Panama'
    },
    'Ngöbe-Buglé': {
      'extent': [
        [
          -82.44554138183591,
          8.145949363708496
        ],
        [
          -81.13265991210932,
          9.186529159546026
        ]
      ],
      'parent': 'Panama'
    },
    'Panamá': {
      'extent': [
        [
          -80.17037200927734,
          7.999860763549833
        ],
        [
          -78.04879760742185,
          9.52334022521974
        ]
      ],
      'parent': 'Panama'
    },
    'Veraguas': {
      'extent': [
        [
          -82.26403045654283,
          7.20235919952394
        ],
        [
          -80.61429595947263,
          9.000139236450195
        ]
      ],
      'parent': 'Panama'
    }
  }
}
