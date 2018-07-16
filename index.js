// add solution here

function theBeatlesPlay(musicians, instruments) {
  var tempArray = []
  for (var i = 0; i < musicians.length; i++) {
    var tempString = `${musicians[i]} plays ${instruments[i]}`
    tempArray = [...tempArray, tempString]
  }
  return tempArray
}

function johnLennonFacts(facts) {
<<<<<<< HEAD
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
=======
  
>>>>>>> f07a8575afd278f6621e308ec42b85f3a0d303d8
}

function iLoveTheBeatles(n) {
  var tempArray = []
  do {
<<<<<<< HEAD
    tempArray = [...tempArray, 'I love the Beatles!']
=======
    tempArray = [...tempArray, 'I Love the Beatles!']
>>>>>>> f07a8575afd278f6621e308ec42b85f3a0d303d8
    n++
  } while (n < 15)
  return tempArray
}