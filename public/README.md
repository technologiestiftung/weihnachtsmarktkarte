## Input data


name | type | purpose | example
--- | --- | --- | ---
id | `string` | a unique id - must be a number  | "1"
shortname | `string` | name of the market  | 
strasse | `string` | street name  | 
plz_ort | `string` | post code  | 
train | `string` | text about public transport  | 
image | `string` | image name including file type e.g. .png  | 
urheberschaft | `string` | image copyright text  | 
von | `string` | opening date  |  "17.11.22"
bis | `string` | closing date  |  "17.11.22"
Mo | `string` | opening times Monday  |  "15:00-22:00"
Di | `string` | opening times Tuesday  |  "15:00-22:00"
Mi | `string` | opening times Wednesday  |  "15:00-22:00"
Do | `string` | opening times Thursday  | "15:00-22:00"
Fr | `string` | opening times Friday  |  "15:00-22:00"
Sa | `string` | opening times Saturday  |  "15:00-22:00"
So | `string` | opening times Sunday  |  "15:00-22:00"
closed-exc | `string` | date exeptions  |  "20.11.22, 24.12.22"
hours-exc | `string` | time exeptions | "25.12.22=11:00-21:00, 26.12.22=11:00-21:00"
w3 | `string` | market website including https://www.  | 
bemerkungen | `string` | some extra text about the market  | 
lat | `number` | coordinate | 52.5076327
lng | `number` | coordinate | 13.45436119
ignore | `string` | if you want to ignore the entry |  '0' or '1' 
immer-kostenlos | `string` | filter free |  '0' or '1' 
international | `string` | filter international |  '0' or '1' 
barrierefrei | `string` | filter barrierefrei |  '0' or '1' 
action | `string` | filter action |  '0' or '1' 
short_distance | `string` | filter short_distance |  '0' or '1' 
