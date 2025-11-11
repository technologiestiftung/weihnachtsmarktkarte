import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

export function getMapData() {
  const toiletsPath = path.join(process.cwd(), 'public/toilets.json')
  const toilets = JSON.parse(fs.readFileSync(toiletsPath, 'utf-8'))

  const xmarketsPathCSV = path.join(process.cwd(), 'public/markets_2025.csv')
  const xmarketsCSV = fs.readFileSync(xmarketsPathCSV, 'utf-8')
  var data = Papa.parse(xmarketsCSV, { header: true }).data.filter(
    (d) => d.lat && d.lng && d.ignore === '0'
  )
  const allowedIds = []
  data.forEach((element, i) => {
    allowedIds.push(Number(element.id))
    element.lng = Number(element.lng.replace(',', '.'))
    element.lat = Number(element.lat.replace(',', '.'))
    element.inaktiv = false
  })

  return { props: { toilets: toilets, markets: data, allowedIds: allowedIds } }
}
