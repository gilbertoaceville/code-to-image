export async function getConvertedCode(codeValue: string, newLanguage: string) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: `Convert the following code to ${newLanguage}: ${codeValue}`,
        },
      ],
    }),
  });

  const data = await res.json();

  if (data.error) throw new Error(data.error);

  return data.choices?.[0]?.message || "";
}
