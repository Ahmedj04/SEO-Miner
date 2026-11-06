import { tool } from "@langchain/core/tools";
import { tavily } from "@tavily/core";

const tavilyClient = tavily({
  apiKey: process.env.TAVILY_API_KEY,
});

export const webSearch = tool(
  async ({ query }) => {
    const result = await tavilyClient.search(query, {
      maxResults: 5,
      searchDepth: "advanced",
    });

    return JSON.stringify(
      result.results.map((item) => ({
        title: item.title,
        url: item.url,
        content: item.content,
      }))
    );
  },
  {
    name: "web_search",
    description:
      "Search the internet for companies offering products or services similar to the target website.",
    schema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
  }
);