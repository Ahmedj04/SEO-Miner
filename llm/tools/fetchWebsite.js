
import { tool } from "@langchain/core/tools";
import * as cheerio from "cheerio";

export const fetchWebsite = tool(
  async ({ url }) => {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(15000),
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const html = await response.text();
      const $ = cheerio.load(html);

      // Remove unnecessary elements
      $("script, style, noscript, iframe, svg").remove();

      const title = $("title").text().trim();

      const description =
        $('meta[name="description"]').attr("content") || "";

      const headings = $("h1, h2, h3")
        .map((_, el) => $(el).text().trim())
        .get()
        .filter(Boolean);

      const content = $("body")
        .text()
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 15000);

      return JSON.stringify({
        success: true,
        url: response.url,
        title,
        description,
        headings,
        content,
      });

    } catch (error) {
      return JSON.stringify({
        success: false,
        url,
        error: error.message,
      });
    }
  },
  {
    name: "fetch_website",
    description:
      "Fetch a website and extract its title, description, headings, and readable content. Use this to analyze a company's products, services, features, and business model.",
    schema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          description: "Website URL including https://",
        },
      },
      required: ["url"],
      additionalProperties: false,
    },
  }
);
