"use strict";
//--------
// tuples
//--------
let persons = ['mario', 30, true];
// person[0] = false
persons[0] = 'john';
//-----------------
// tuples examples
//-----------------
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords of something
    const lat = 10;
    const long = 30;
    return [lat, long];
}
const [lat, long] = useCoords();
//--------------
// named tuples
//--------------
let users;
users = ['peach', 25];
console.log(users[0]);
