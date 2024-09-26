import { NextResponse } from "next/server";

export async function POST(req) {


  try {
    // Parse the textarea from the request body
    let { textarea } = await req.json();
    const lang = ["EL", "SV", "EN"]; // Languages to translate through
    // Ensure the DeepL API key is set
    if (!process.env.DEEPL_API_KEY) {
      throw new Error("Missing DeepL API Key");
    }

   
    for (const targetLang of lang) {
      try {
        const response = await fetch(
          "https://api-free.deepl.com/v2/translate",
          {
            method: "POST",
            body: JSON.stringify({
              text: [textarea], // Text should be in an array
              target_lang: targetLang,
            }),
            headers: {
              Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Ensure the response is OK
        if (!response.ok) {
          throw new Error(
            `Failed to translate to ${targetLang}: ${response.statusText}`
          );
        }

        const val = await response.json();

        // Check if a valid translation was received
        if (val.translations && val.translations.length > 0) {
          textarea = val.translations[0].text; // Overwrite textarea with the new translation
        } else {
          throw new Error(`Translation failed for ${targetLang}`);
        }
      } catch (err) {
        console.error(`Error translating to ${targetLang}:`, err);
        throw new Error(`Translation process failed at ${targetLang}`);
      }
    }


    return NextResponse.json({ translatedText: textarea });
  } catch (error) {
    console.log("Error during translation:", error);
    return NextResponse.json({
      error: "Translation failed",
      details: error.message,
    });
  }
}
