// setMarketFilterDate(selected.getMonth() + 1, selected.getDate())
export function filterMarkets(
  data,
  marketFilterInternational,
  marketFilterCosts,
  marketFilterDate,
  marketFilterDesign,
  marketFilterTime
) {
  data.forEach((d) => {
    d.inaktiv = d['immer-kostenlos'] === '1' && marketFilterCosts ? true : false
    // d.inaktiv = d['international'] === '1' && marketFilterCosts ? true : false
  })

  console.log('filterMarkets', data)

  return data
}
