import { ChatOllama } from "@langchain/ollama";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// export const OLLAMA_FAST_MODEL = "gpt-oss:20b";
export const OLLAMA_FAST_MODEL = "gemma4:31b";
// export const OLLAMA_SMART_MODEL = "nemotron-3-super";
export const OLLAMA_SMART_MODEL = "nemotron-3-ultra";
export const OLLAMA_TEMPERATURE = 0.2;


export function createClient(modelName, format) {
  if (!process.env.OLLAMA_HOST) throw new Error("OLLAMA_HOST is required.");
  if (!process.env.OLLAMA_API_KEY) throw new Error("OLLAMA_API_KEY is required.");
  
  return new ChatOllama({
    baseUrl: process.env.OLLAMA_HOST.replace(/\/$/, ""),
    model: modelName,
    think: true,
    temperature: OLLAMA_TEMPERATURE,
    headers: {
      Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
    },
    ...(format === "json" ? { format: "json" } : {}),
  });
}

export async function ollamaCall({ prompt, systemInstruction, modelName, format }) {
  const model = createClient(modelName, format);

  const messages = [];
  if (systemInstruction) messages.push(new SystemMessage(systemInstruction));
  messages.push(new HumanMessage(prompt));

  try {
    const response = await model.invoke(messages);
    const content = response.content;
    return typeof content === "string" ? content : JSON.stringify(content);
  } catch (error) {
    console.error("Error calling Ollama:", error);
    throw new Error("Error calling Ollama", { cause: error });
  }
}
