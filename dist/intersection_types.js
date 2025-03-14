"use strict";
//-------------------
// Intersection Type
//-------------------
// example with generic function
function addIdToValue1(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue1({ title: "Law of money", thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
