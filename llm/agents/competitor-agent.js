import { createAgent } from "langchain";
import { createClient, OLLAMA_FAST_MODEL } from "../ollama.js";
import { webSearch, fetchWebsite } from "../tools";

const model = createClient(OLLAMA_FAST_MODEL, "json");

const systemPrompt = `
You are an expert competitive intelligence analyst.

Your task is to identify genuine DIRECT competitors
of a given website.

Follow this research process:

1. Analyze the target website.
2. Identify its core product and functionality.
3. Understand its business and revenue model.
4. Identify its target audience.
5. Generate relevant competitor search queries.
6. Use web_search to discover potential competitors.
7. Use fetch_website to inspect candidate websites.
8. Compare their products and business models.
9. Exclude indirect and unrelated competitors.

IMPORTANT:

A company is a direct competitor only if it offers
substantially similar products or services to the
same target audience using a comparable business model.

Do not confuse:
- Website monetization with browser mining.
- Advertising networks with cryptocurrency mining.
- Offerwalls with distributed computing.
- General computing infrastructure with mining platforms.

Return a maximum of 3 genuine direct competitors.

Never invent URLs or company names.
Do not include the target website itself.

Return valid JSON only:

{
  "competitorUrls": [
    "https://example.com"
  ]
}
`;

export const competitorAgent = createAgent({
  model,
  tools: [ webSearch, fetchWebsite ],
  systemPrompt,
});

export const getCompetitorsFromAgent = async (url) => {
  const prompt = `Find the direct competitors of ${url}`;
  try {
    const { messages } = await competitorAgent.invoke({
    messages: [{ role: 'user', content: prompt }],
    });
    const content = messages.at(-1).content;
    return typeof content === 'string' ? content : JSON.stringify(content);
  } catch (error) {
    throw new Error('Error while fetching competitors');
  }
  
};
