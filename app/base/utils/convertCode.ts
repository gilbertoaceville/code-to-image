const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const url = process.env.OPENAI_URL || "";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

const maxRetries = 3;
let currentRetry = 0;
export async function convertCode(
  codeValue: string,
  language: string
): Promise<string | null> {
  if (!codeValue || !language) {
    console.log("Value or language is null.");
    return null;
  }

  const cacheKey = `cvCache`;

  // Confirm cache entry exists in local storage
  const cachedEntries = JSON.parse(localStorage.getItem(cacheKey) || "{}");

  try {
    // Check if the converted code for the language is cached and initial codeValue === current codeValue
    if (cachedEntries[language] && codeValue === cachedEntries.codeValue) {
      console.log("Using cached code.");
      return cachedEntries[language];
    }

    // If not cached or codeValue has changed, make a request to openAI
    const response = await fetch(url, {
      ...options,
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: `Convert the following code to ${language}: ${codeValue}`,
          },
        ],
        model: "gpt-3.5-turbo",
      }),
    }).then((res) => res.json());

    const convertedCode =
      response.choices?.[0]?.text ||
      response.choices?.[0]?.message?.content ||
      "";

    // Update the cache entry in local storage if codeValue has changed
    const updatedEntries = {
      ...cachedEntries,
      [language]: convertedCode,
      codeValue: codeValue,
    };
    localStorage.setItem(cacheKey, JSON.stringify(updatedEntries));

    return convertedCode;
  } catch (error: any) {
    if (error.status === 429 && currentRetry < maxRetries) {
      const delay = Math.pow(2, currentRetry) * 1000; // Exponential backoff
      console.log(`Rate limited. Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      currentRetry++;
      return convertCode(codeValue, language); // Retry the request
    } else {
      console.log(`An error occurred: ${error}`);
      throw new Error(`Failed converting code to ${language}: ${error}`);
    }
  }
}

export async function getConvertedCode(
  codeValue: string,
  newLanguage: string
) {
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
