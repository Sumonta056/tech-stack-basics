/*
* Mistake - 1 : Wrong Syntax
const data = [
    {
        id : 1,
        name : "Sumonta Saha",
        position : "Associate Software Engineer"
    },
    {
        id : 2,
        name : "Mridul",
        position : "Senior Software"
    }
]


function candidateName(){
    candidate = []   // ❌ Problem 1: candidate is not declared (var/let/const missing)

    const info = data.map((value) => {
        candidate += value.name   // ❌ Problem 2: candidate is an array, but `+=` concatenates as string
    })
    
    console.log(info)  // ❌ Problem 3: .map() always returns a new array, but you’re not returning anything
}


candidateName()

*/

/*
* Mistake 2 : Not using brackets properly
const data = [
    {
        id : 1,
        name : "Sumonta Saha",
        position : "Associate Software Engineer"
    },
    {
        id : 2,
        name : "Mridul",
        position : "Senior Software"
    }
]


function candidateName(){
    const info = data.map((value) =>{ value.name, value.id})
    console.log(info)
}


candidateName()
*/

const data = [
  {
    id: 1,
    name: "Sumonta Saha",
    position: "Associate Software Engineer",
  },
  {
    id: 2,
    name: "Mridul",
    position: "Senior Software",
  },
];

function candidateName() {
  const info = data.map((value) => ({ name: value.name, id: value.id }));
  console.log(info);
}

candidateName();
