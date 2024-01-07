import { LanguageProps } from "@/components/LangugeSelector/types";

export const languages: LanguageProps = [
  {
    name: "JavaScript",
    icon: "icons/javascript.svg",
  },
  {
    name: "HTML",
    icon: "icons/html.svg",
  },
  {
    name: "Golang",
    icon: "icons/golang.svg",
  },
  {
    name: "Python",
    icon: "icons/python.svg",
  },
  {
    name: "Java",
    icon: "icons/java.svg",
  },
  {
    name: "TypeScript",
    icon: "icons/typescript.svg",
  },
];

export const themes: string[] = ["cobalt", "monokai", "twilight", "dracula"];

export const paddings: string[] = ["1rem", "2rem", "3rem", "4rem"];

export const linearBackgrounds: string[] = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",
];

export const defaultCode: string = `function fibonacci(n) {
  if (n <= 1) {
      return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example: Get the 10th Fibonacci number
const result = fibonacci(10);
console.log(result);`;
