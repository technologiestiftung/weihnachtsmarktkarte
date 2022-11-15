import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

export function getMapData() {
  // const xmarketsPath = path.join(process.cwd(), 'public/xmarkets.json')
  // const xmarkets = JSON.parse(fs.readFileSync(xmarketsPath, 'utf-8'))

  const toiletsPath = path.join(process.cwd(), 'public/toilets.json')
  const toilets = JSON.parse(fs.readFileSync(toiletsPath, 'utf-8'))

  const xmarketsPathCSV = path.join(process.cwd(), 'public/markets.csv')
  const xmarketsCSV = fs.readFileSync(xmarketsPathCSV, 'utf-8')
  var data = Papa.parse(xmarketsCSV, { header: true }).data.filter(
    (d) => d.lat && d.lng
  )
  data.forEach((element, i) => {
    element.id = i
    element.lng = Number(element.lng.replace(',', '.'))
    element.lat = Number(element.lat.replace(',', '.'))
  })

  return { props: { toilets: toilets, markets: data } }
}
