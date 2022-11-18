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
    d.inaktiv = false
    if (marketFilterCosts && d['immer-kostenlos'] === '0') {
      d.inaktiv = true
      return
    }
    if (marketFilterInternational && d['international'] === '0') {
      d.inaktiv = true
      return
    }
  })

  return data
}
