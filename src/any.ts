//----------
// any type
//----------
let code: any
let title

code = 30
code = false

title = 25
title = {
	hello: 'world',
}

//--------------------
// any type in arrays
//--------------------

let xtc: any[] = ['hello', true, 30, null]

xtc.push({ id: 123 })

//-----------------
// functions & any
//-----------------

function addTogether(value: any): any {
	return value + value
}

const resultOne = addTogether('hello')
const resultTwo = addTogether(3)

// useful when migrating from js to ts
// because using any won't cause errors initially