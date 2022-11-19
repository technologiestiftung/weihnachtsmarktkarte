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
    const costs =
      d['immer-kostenlos'] === '1' && marketFilterCosts ? true : false
    const international =
      d['merged'] === '1' && marketFilterInternational ? true : false
    d.inaktiv = costs || international
  })

  return data
}
