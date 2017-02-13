var mass = ['kg', 'g']

var massExamples = [{
  'title': 'Golfballs',
  'measurement': '0.04593'
}, {
  'title': 'Elephants',
  'measurement': '5500'
}]

function submit () {
  var inputUnit = document.getElementById('unit').value
  var inputNumber = document.getElementById('number').value


  mass.forEach(function (item) {
    if (item == inputUnit) {
      for (var i = 0; i < massExamples.length; i++) {
        document.getElementById('result').innerHTML += inputNumber / massExamples[i].measurement + ' ' + massExamples[i].title
      }
    } else {
      // document.getElementById('result').innerHTML = 'Unsupported unit!'
    }

  })
}
