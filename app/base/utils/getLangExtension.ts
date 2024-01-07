export function getLangExtension(language: string): string {
  switch (language) {
    case "JavaScript":
      return ".js";
    case "HTML":
      return ".html";
    case "Golang":
      return ".go";
    case "Python":
      return ".py";
    case "Java":
      return ".java";
    case "TypeScript":
      return ".ts";
    default:
      return ".js";
  }
}
