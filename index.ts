// Basic types string, number, and boolean
// Unions
// Interfaces
// Optional and partial
// Functions
// Objects
// Enums
// Record
// Readonly
//
// Discriminated unions
//

let greetings: string;

greetings = "welcome to padhega india";

const helloExtended = greetings.toUpperCase();

interface IBody {
  gender: "male" | "female" | "other";
  weight: number;
  height: number;
  isCool?: boolean;
  about?: string;
}

let gender: IBody["gender"];
gender = "female";

const human1: Partial<IBody> = {};

const iscool = human1.about;

const sum = (x: number, y: number): number => {
  return x + y;
};

const sumResult = sum(10, 19);

const saySomething = (body: IBody) => {
  return JSON.stringify(body);
};

saySomething({ gender: "female", weight: 10, height: 20 });

enum JOB_TYPE {
  freelance = 100,
  contract = 200,
}

const findPay = (type: JOB_TYPE) => {
  return `You will be paid ${type}`;
};

// console.log(findPay(JOB_TYPE.contract));

type StudentName = "shivam" | "shivani" | 69;
const students: Record<StudentName, Readonly<IBody>> = {
  shivam: { gender: "male", weight: 10, height: 122 },
  shivani: { gender: "female", weight: 50, height: 2 },
  69: { gender: "female", weight: 50, height: 2 },
};

interface ICircle {
  kind: "circle";
  radius: number;
}
interface ISquare {
  kind: "square";
  length: number;
}

interface IRectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Area = {
  color?: string;
} & (ISquare | IRectangle | ICircle);

const findArea = (props: Area): number => {
  switch (props.kind) {
    case "circle":
      const { radius } = props;
      return Math.PI * radius * radius;
    case "rectangle":
      var { length, breadth } = props;
      return length * breadth;
    case "square":
      var { length } = props;
      return length * length;
  }
};

console.log(findArea({ kind: "circle", radius: 100 }));

const handler = (e: KeyboardEvent) => {
  return e.altKey;
};
