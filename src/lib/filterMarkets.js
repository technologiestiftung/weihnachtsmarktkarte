// setMarketFilterDate(selected.getMonth() + 1, selected.getDate())
function toDate(string) {
  const dateArray = string.trim().split('.')
  const newString =
    '20' + dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0] + 'T00:00:00'
  return new Date(newString)
}

function checkOpenOnDay(date, d) {
  const daysHelper = {
    1: 'Mo',
    2: 'Di',
    3: 'Mi',
    4: 'Do',
    5: 'Fr',
    6: 'Sa',
    0: 'So',
  }
  // console.log(
  //   d[daysHelper[date.getDay()]] === '0',
  //   d[daysHelper[date.getDay()]]
  // )
  if (d[daysHelper[date.getDay()]] === '0') {
    return false
  } else {
    return true
  }
}

function openOnDate(date, d) {
  //check for exceptions
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

  // if (checkOpenOnDay(date, d)) {
  //   return true
  // }

  // check von bis
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
