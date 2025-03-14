//-------------------
// Generic Interface
//-------------------

interface Collection<T> {
  data: T[];
  name: string;
}

const collectionOne: Collection<string> = {
  data: ["john", "jane", "doe"],
  name: "john characters",
};
const collectionTwo: Collection<number> = {
  data: [10, 15, 27, 3, 9, 34],
  name: "winning lottery numbers",
};

function randomCollectionItem<T>(c: Collection<T>): T {
  const i = Math.floor(Math.random() * c.data.length);

  return c.data[i];
}

const result11 = randomCollectionItem<string>(collectionOne);
const result12 = randomCollectionItem(collectionTwo);

console.log(result11, result12);
