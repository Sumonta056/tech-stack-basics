// ! Nullish Coalescing Operator

// *  Returns the right-hand value only if the left-hand value is null or undefined.

// const username = null            -- guest
// const username = undefined       -- guest
// const username = 0               -- 0
// const username = ''                -- blank
// const username = true/false          -- false/true

const displayName = username ?? "Guest";
console.log(displayName);

/*

undefined ?? 10 // Result: 10
null ?? 10 // Result: 10
0 ?? 10 // Result: 0
false ?? 10 // Result: false
"Hi" ?? 10 // Result: Hi
20 ?? 10 // Result: 20

*/

// ! Optional Chaining

// * If person is undefined our code will just return undefined instead of throwing an error

const user = null;

// ❌ This will throw error: "Cannot read property 'name' of null"
console.log(user.name);

// ✅ Returns undefined instead of crashing
console.log(user?.name); // undefined

const cart = {
  items: [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
  ],
};

const firstItemPrice = cart.items?.[0]?.price ?? 0;
console.log(firstItemPrice); // 50000

const thirdItemPrice = cart.items?.[2]?.price ?? "No item";
console.log(thirdItemPrice); // "No item"

// ?. → avoids error when property/method might not exist.

// * Returns undefined if the value before ?. is null or undefined.
// * Best used with ?? for default values.

// ! || → Logical OR

// * If left side is falsy (false, 0, "", null, undefined, NaN) → returns the right side.

const username = "";
const displayName1 = username || "Guest";
console.log(displayName1); // "Guest"
