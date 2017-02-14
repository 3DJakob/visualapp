const units = new Map([
  ['t', { quantityName: 'mass', multiplier: 1000 }],
  ['kg', { quantityName: 'mass', multiplier: 1 }],
  ['g', { quantityName: 'mass', multiplier: 0.001 }],
  ['u', { quantityName: 'mass', multiplier: 0.00000000000000000000000000166 }],
  ['s', { quantityName: 'time', multiplier: 1 }]
])

const quantities = new Map([
  ['mass', {
    examples: [
      { title: 'Water molecules', measurement: 0.00000000000000000000002992 },
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
