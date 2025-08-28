console.log('dsvhfd hjfsv kjh ')

//Ewiniar - 1
//Maliksi - 2
//Gaemi - 4
//Prapiroon - 5
//Maria - 6

rl = require('readline')
rli = rl.createInterface({
  input: process.stdin,
})
rli.on('line', give_td)

function give_td(num)   {
    switch (Number(num)) {
case 5:
    console.log('Maria - 6')
    break
case 4:
    console.log('Prapiroon - 5')
    break
case 3:
    console.log('Gaemi - 4')
    break
case 2:
    console.log('Maliksi - 2')
    break
case 1:
    console.log('Ewiniar - 1')
    break
    
    }


}