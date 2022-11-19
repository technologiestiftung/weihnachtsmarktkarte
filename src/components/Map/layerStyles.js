export const layerStyles = {
  toilets: {
    id: 'layer-toilets',
    type: 'circle',
    paint: {
      'circle-radius': 3,
      'circle-color': '#3134dd',
    },
  },
  xmarkets: {
    id: 'layer-xmarkets',
    type: 'circle',
    filter: ['!=', '', ''],
    paint: {
      'circle-radius': 8,
      'circle-color': '#BDA33B',
    },
  },
}
