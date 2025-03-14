//-------------------
// Intersection Type
//-------------------

type Person1 = {
  firstName: string;
  id: number;
};

type User2 = Person1 & {
  email: string;
};

// example with generic function

function addIdToValue1<T>(val: T): T & HasID {
  const id = Math.random();

  return { ...val, id };
}

interface Post1 {
  title: string;
  thumbsUp: number;
}

interface HasID {
  id: number;
}

const post = addIdToValue1<Post1>({ title: "Law of money", thumbsUp: 250 });

console.log(post.id, post.title, post.thumbsUp);
