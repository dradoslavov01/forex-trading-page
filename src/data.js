const json = {
  "success":true,
  "timestamp":1626358024,
  "base":"EUR",
  "date":"2021-07-15",
  "rates":{
    "AUD":1.587608,
    "BGN":1.955832,
    "GBP":0.852723,
    "USD":1.181998,
    "UYU":51.973196,
    "UZS":12570.550887,
    "VEF":252746931045.85898,
    "VND":27195.948945,
    "VUV":130.160103,
    "WST":3.016053,
    "XAG":0.044949,
    "XAU":0.000648,
    "XCD":3.19441,
    "XDR":0.830564
  }
}

const data = [];

for (const key in json.rates) {
  data.push({[key]: (json.rates[key]).toFixed(4)})
};


export default data;

