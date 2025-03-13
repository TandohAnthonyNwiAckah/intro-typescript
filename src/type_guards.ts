//-------------
// type guards
//-------------

// example 1

type Ids = number | string

function swapIdTypes(id: Id): Id {

	if (typeof id === 'string') {
		// can use string methods and properties
		return parseInt(id)
	} 
    //
    else {
		// can use number methods and properties
		return id.toString()
	}
}

const idOne = swapIdTypes(1)
const idTwo = swapIdTypes('2')

console.log(idOne, idTwo)

//--------------------
// tagged union types
//--------------------

interface Users {
	type: 'users'
	username: string
	email: string
	id: Id
}

interface Persons {
	type: 'persons'
	firstname: string
	age: number
	id: Id
}

function logDetails(value: Users | Persons): void {

	if (value.type === 'users') {
		console.log(value.email, value.username)
	}
    
	if (value.type === 'persons') {
		console.log(value.firstname, value.age)
	}
}