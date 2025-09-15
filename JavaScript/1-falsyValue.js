function createUser(name, favoriteNumber) {
  if (name == null || favoriteNumber == null) return;
  return {
    id: Math.random(),
    name,
    favoriteNumber,
  };
}

/*
! if use !favoriteNumber : true or false?
* if favoriteNumber is 0, it will show true for if else condidate
* careful for the scenario, must need to null or undefined
*/

/*
! 0 == "" : true or false?
* as 0 not equal to empty string, you may assume it will be false
* but the ans is true, cause js converts empty string to 0 
*/

/*
! Wierd JS
* null == undefined // true
* null === undefined // false
* x == null // True if x is null or undefined
* x === null // Only true is x is null
*/

// In 99% of all cases you should use triple equals comparison when comparing two values to avoid false positives, but if you are attempting to check if a vales is null/undefined then using double equals is the preferred method.

/*
! Wierd JS
* !null // true
* !undefined // true
* !{ name: "Kyle" } // false

* null == null // true
* undefined == null // true
* { name: "Kyle" } == null // false

 In this scenario !number and number == null will act exactly the same, except for the number 0.

* !0 // true
* !1 // false

* 0 == null // false
* 1 == null // false

The reason for this discrepancy is because the bang operator needs to convert the number to a boolean in order to negate the boolean and the number 0 is considered false when converting to a boolean. This can easily lead to bugs in your program that are difficult to catch.

This is not only an issue with the number 0, though. NaN and empty strings, "", also evaluate to false when converted to a boolean which means you could get unintended results when using the bang operator if all you wanted to check was if the value was null or undefined.

This is also why I almost always use triple equals, ===, instead of double equals, ==, since triple equals never does type coercion.
*/