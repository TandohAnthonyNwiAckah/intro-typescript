//--------
// tuples
//--------

let persons: [string, number, boolean] = ['mario', 30, true]

// person[0] = false
persons[0] = 'john'

//-----------------
// tuples examples
//-----------------

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.7, 20.1]

function useCoords(): [number, number] {
	// get coords of something

	const lat = 10
	const long = 30

	return [lat, long]
}

const [lat, long] = useCoords()

//--------------
// named tuples
//--------------

let users: [name: string, age: number]

users = ['peach', 25]
console.log(users[0])