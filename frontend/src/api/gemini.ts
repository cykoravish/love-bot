export async function getGeminiResponse(contents: any[]) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
        import.meta.env.VITE_GEMINI_API_KEY
      }`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.9,
            maxOutputTokens: 50,
          },
        }),
      }
    );

    const data = await response.json();
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "mtlab, mujhe samajh nahi aaya baby"
    );
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Oops! Koi gadbad ho gayi babu 😅";
  }
}
