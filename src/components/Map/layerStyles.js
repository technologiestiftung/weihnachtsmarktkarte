export const layerStyles = {
  'toilets-circles': {
    id: 'layer-toilets-cirlces',
    type: 'circle',
    paint: {
      'circle-radius': 4,
      'circle-color': '#8083e8',
      'circle-opacity': [
        'interpolate',
        // Set the exponential rate of change to 0.5
        ['exponential', 0.5],
        ['zoom'],
        // When zoom is 15, buildings will be beige.
        11.5,
        0,
        // When zoom is 18 or higher, buildings will be yellow.
        15,
        1,
      ],
    },
    minZoom: 12,
  },
  'toilets-labels': {
    id: 'layer-toilets',
    type: 'symbol',
    // source: 'places',
    paint: {
      'text-opacity': [
        'interpolate',
        // Set the exponential rate of change to 0.5
        ['exponential', 0.5],
        ['zoom'],
        // When zoom is 15, buildings will be beige.
        13,
        0,
        // When zoom is 18 or higher, buildings will be yellow.
        15,
        1,
      ],
      'text-color': '#8083e8',
    },
    layout: {
      // 'text-field': ['get', 'Description'],
      'text-field': 'WC',
      'text-size': 12,
      'text-anchor': 'bottom',
      'text-radial-offset': 0.7,
      'text-justify': 'auto',
      //'icon-image': 'square',
    },
  },
}
