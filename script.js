var mass = ['kg', 'g']
var massExamples = [{
  'title': 'Postage Stamps',
  'measurement': '0.00002'
}, {
  'title': 'Ping Pong Balls',
  'measurement': '0.0027'
}, {
  'title': 'Golfballs',
  'measurement': '0.04593'
}, {
  'title': 'Elephants',
  'measurement': '5500'
}]

function submit () {
  document.getElementById('result').innerHTML = ''
  document.getElementById('unit').style.backgroundColor = 'rgba(255, 0, 0, 0.4)'
  document.getElementById('number').style.backgroundColor = 'rgba(255, 255, 255, 1)'
  var inputUnit = document.getElementById('unit').value
  var inputNumber = document.getElementById('number').value

  if (isNaN(inputNumber)) {
    document.getElementById('number').style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
  }

  mass.forEach(function (item) {
    if (item === inputUnit) {
      for (var i = 0; i < massExamples.length; i++) {
        if (isNaN(inputNumber) === false) {
          document.getElementById('result').innerHTML += '<h3>' + inputNumber / massExamples[i].measurement + ' ' + massExamples[i].title + '</h3>'
        }
        document.getElementById('unit').style.backgroundColor = 'rgba(255, 255, 255, 1)'
      }
    }
  })
}
