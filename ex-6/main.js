let jean
let paul
let result

function checkname(Jean, Paul) {
  if (jean === Paul) {
    result = "ok"
  } else {
    result = "nope"
  }
}

// met des valeurs a Jean et Paul

Jean = "Jean"
Paul = "Paul"

// je call la fonction "checkname"

checkname(Jean, Paul)

console.log(result);