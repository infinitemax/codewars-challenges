const array = ["run", "swim", "cycle", "run", "run", "run"]

const obj = array.reduce((acc, cur) => (acc[cur] = 0, acc), {})

console.log(obj)