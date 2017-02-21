const units = new Map([
  ['pc', { quantityName: 'length', multiplier: 30856775800000000 }],
  ['ly', { quantityName: 'length', multiplier: 9460528400000000 }],
  ['mil', { quantityName: 'length', multiplier: 10000 }],
  ['mile', { quantityName: 'length', multiplier: 1609.344 }],
  ['km', { quantityName: 'length', multiplier: 1000 }],
  ['m', { quantityName: 'length', multiplier: 1 }],
  ['yard', { quantityName: 'length', multiplier: 0.9144 }],
  ['yards', { quantityName: 'length', multiplier: 0.9144 }],
  ['foot', { quantityName: 'length', multiplier: 0.3048 }],
  ['feet', { quantityName: 'length', multiplier: 0.3048 }],
  ['dm', { quantityName: 'length', multiplier: 0.1 }],
  ['inch', { quantityName: 'length', multiplier: 0.0254 }],
  ['cm', { quantityName: 'length', multiplier: 0.01 }],
  ['mm', { quantityName: 'length', multiplier: 0.001 }],
  ['Å', { quantityName: 'length', multiplier: 0.0000000001 }],

  ['t', { quantityName: 'mass', multiplier: 1000 }],
  ['st', { quantityName: 'mass', multiplier: 6.35029318 }],
  ['kg', { quantityName: 'mass', multiplier: 1 }],
  ['lbs', { quantityName: 'mass', multiplier: 0.45359237 }],
  ['g', { quantityName: 'mass', multiplier: 0.001 }],
  ['u', { quantityName: 'mass', multiplier: 0.00000000000000000000000000166 }],

  ['year', { quantityName: 'time', multiplier: 31556926 }],
  ['years', { quantityName: 'time', multiplier: 31556926 }],
  ['week', { quantityName: 'time', multiplier: 604800 }],
  ['weeks', { quantityName: 'time', multiplier: 604800 }],
  ['day', { quantityName: 'time', multiplier: 86400 }],
  ['days', { quantityName: 'time', multiplier: 86400 }],
  ['h', { quantityName: 'time', multiplier: 3600 }],
  ['min', { quantityName: 'time', multiplier: 60 }],
  ['s', { quantityName: 'time', multiplier: 1 }]
])

const quantities = new Map([
  ['length', {
    examples: [
      { title: 'Little penguins', measurement: 0.4 },
      { title: 'Kim Jong Un\'s', measurement: 1.71 },
      { title: 'Donald Trump\'s', measurement: 1.84 }
    ]
  }],
  ['mass', {
    examples: [
      { title: 'Water molecules', measurement: 0.00000000000000000000002992 },
      { title: 'Postage Stamps', measurement: 0.00002 },
      { title: 'Golfballs', measurement: 0.04593 },
      { title: 'Elephants', measurement: 5500 }
    ]
  }],
  ['time', {
    examples: [
      { title: 'Generation', measurement: 852037001 }
    ]
  }]
])

function onload () {
  const names = units.keys()
  let html = ''

  units.forEach(function () {
    html = html.concat(names.next().value + ', ')
  })
  document.getElementById('units').innerHTML += html.slice(0, -2)
}

function submit () {
  const inputUnit = document.getElementById('unit').value
  const inputNumber = Number(document.getElementById('number').value)

  if (!inputNumber) {
    document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
  } else {
    document.getElementById('number').style.backgroundColor = 'rgba(255, 255, 255, 1)'
  }

  if (!units.has(inputUnit)) {
    document.getElementById('unit').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
  } else {
    document.getElementById('unit').style.backgroundColor = 'rgba(255, 255, 255, 1)'
  }

  const { quantityName, multiplier } = units.get(inputUnit)
  const { examples } = quantities.get(quantityName)

  if (inputNumber || units.has(inputUnit)) {
    const html = examples
    .map(example => `<h3>${inputNumber * multiplier / example.measurement} ${example.title}</h3>`)
    .join('\n')

    document.getElementById('result').innerHTML = html
  }
}

let visibility = 0

function viewUnits () {
  if (visibility) {
    document.getElementById('units').style.display = 'none'
  } else {
    document.getElementById('units').style.display = 'block'
  }
  visibility = !visibility
}
