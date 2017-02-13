var mass = ['kg', 'g']

var massExamples = [{
  'title': 'Golfball',
  'measurement': '0.04593'
}]

function submit () {
  var inputUnit = document.getElementById('unit').value
  var inputNumber = document.getElementById('number').value

  var unit;
  // document.getElementById('body').style.backgroundColor = 'red'
  document.getElementById('result').innerHTML = 'No match'

  mass.forEach(function (item) {
    if (item == inputUnit) {
      var golf = inputNumber * (1/0.04593)
      document.getElementById('result').innerHTML = golf + 'Golfballs'
    }
  })
}
