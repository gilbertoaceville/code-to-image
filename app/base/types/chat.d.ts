type Message = {
  id: number;
  role: "system" | "assistant" | "user";
  content: string;
};
