// setMarketFilterDate(selected.getMonth() + 1, selected.getDate())
function toDate(string) {
  const dateArray = string.trim().split('.')
  const newString =
    '20' + dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0] + 'T00:00:00'
  return new Date(newString)
}

function openOnDate(date, d) {
  if (d['closed-exc'] !== '0') {
    const exeptions = d['closed-exc'].split(',')
    let isExeption = false
    exeptions.forEach((e) => {
      if (e === '') {
        isExeption = false
        return
      }
      if (toDate(e).toISOString() === date.toISOString()) {
        isExeption = true
      }
    })
    if (isExeption) {
      return false
    }
  }

  if (date >= toDate(d.von) && date <= toDate(d.bis)) {
    return true
  }
  return false
}

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
    if (marketFilterDate && !openOnDate(marketFilterDate, d)) {
      d.inaktiv = true
      return
    }
  })

  return data
}
