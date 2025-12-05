// const array = [{"hallo", 56, [], {}}];

const strings = ["hallo", "tschüss", "was?"];
const nums = [1, 3, 5, 6, 7];
const bools: boolean[] = [true, false, false, true];
const bools2: Array<boolean> = [true, false, false, true];

// nums.push("4");

// # TUPLES

const graphCoordinates: [number, number, number?] = [23, -3];

// graphCoordinates[0] = "string";

// const [counter, setCounter] = useState(0);

// # Object Types
// # Union Types
// # Type-Aliases

type StringOrNumber = string | number;
type Person = { id: StringOrNumber; readonly name: string; age: number; city?: string };

const person: Person = {
  id: "34543sdf-5234",
  name: "Steve Rogers",
  age: 72,
};

const person2: Person = {
  id: 4,
  name: "Reed",
  age: 42,
  city: "Berlin",
};

const people: Person[] = [];

people.push(person);
people.push(person2);

// people.push({ name: "Susan" });

if (person.city) {
  console.log(person.city.toUpperCase());
}

console.log(person.city?.toUpperCase());

// person.name = "Captain America";

person.age = 73;

// # Array of Objects
// # Interfaces

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 30 },
];

console.log(users);

users.forEach((user) => console.log(`${user.name} ist ${user.age} Jahre alt`));

// const test: readonly [{}, {}] = [{}, {}];
// const name = "Sarah";

// test.push({ name: "test" });
// test.push("Test");
// console.log(test);

// # Type Intersections

type DBEntry = {
  _id: string;
  createdAt: string;
};

type Role = "admin" | "user" | "staff";

type DBUser = DBEntry & {
  name: string;
  email: string;
  password: string;
  role: Role;
};

const user: DBUser = {
  _id: "34543sdf-5234",
  name: "Steve Rogers",
  email: "captain@america.com",
  password: "stevepass1",
  createdAt: "2025-12-05",
  role: "user",
};
// # ##################################

// # Literal Unions

type Direction = "left" | "right" | "up" | "down";

// Example 1: Using in a variable
let move: Direction = "left";

// Example 2: Function accepting a Direction
function movePlayer(direction: Direction) {
  console.log(`Player moves ${direction}`);
}

movePlayer("left"); //
movePlayer("left"); //
movePlayer("forward"); //  Error: Argument of type '"forward"' is not assignable to type 'Direction'

// Example 3: Switch statement with exhaustive checking
function handleDirection(dir: Direction) {
  switch (dir) {
    case "left":
      console.log("Moving left");
      break;
    case "right":
      console.log("Moving right");
      break;
    case "up":
      console.log("Moving up");
      break;
    case "down":
      console.log("Moving down");
      break;
    default:
      // TypeScript will warn if we forget a case
      const _exhaustiveCheck: never = dir;
      return _exhaustiveCheck;
  }
}

handleDirection("left");
handleDirection("forward"); //  Error: Argument of type '"forward"' is not assignable to type 'Direction'

// # Function Types

type Calculation = (chicken: number, dino: number) => number;

const add: Calculation = (a, b) => {
  return a + b;
};
const subtract: Calculation = (a, b) => a - b;

add(5, 8);
subtract(5, 8);

//@ts-expect-error
add("4", 6);

// # ############################

type Greeter = (name: string) => string;
type Comparator = (a: number, b: number) => number;
type Log = "error" | "warn" | "info" | "log";
type LoggerFactory = (prefix: Log) => (msg: string) => void;

// Example 1: Assigning a Function to a Variable
const greet: Greeter = (name) => `Hello, ${name}`;
console.log(greet("Alejandra"));

// Example 2: Passing as a Callback
const sortNumbers = (arr: number[], compare: Comparator): number[] => {
  return arr.sort(compare);
};
const descending: Comparator = (a, b) => b - a;
console.log(sortNumbers([3, 1, 2], descending));

// Example 3: Returning a Function
const createLogger: LoggerFactory = (prefix) => (msg) => {
  console[prefix](`[${prefix.toUpperCase()}] ${msg}`);
};

const errorLogger = createLogger("error");
const warnLogger = createLogger("warn");
errorLogger("Something broke"); // [ERROR] Something broke
warnLogger("Something almost broke"); // [WARN] Something almost broke
