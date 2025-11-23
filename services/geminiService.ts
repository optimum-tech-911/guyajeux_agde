import { GoogleGenAI, Type } from "@google/genai";
import { AIRecord } from "../types";

// Initialize the API client
// CRITICAL: process.env.API_KEY is used directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGameRecommendations = async (userPreference: string): Promise<AIRecord[]> => {
  try {
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `Tu es un sommelier ludique expert pour la boutique Guyajeux Agde. 
      L'utilisateur cherche un jeu avec ces critères : "${userPreference}".
      Recommande exactement 3 jeux de société modernes existants qui correspondent à cette demande.
      Pour chaque jeu, explique pourquoi tu l'as choisi en une phrase courte et vendeuse.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "Le nom exact du jeu",
              },
              description: {
                type: Type.STRING,
                description: "Brève description du style de jeu (ex: placement d'ouvriers, ambiance)",
              },
              reason: {
                type: Type.STRING,
                description: "Pourquoi ce jeu correspond à la demande",
              }
            },
            required: ["name", "description", "reason"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return [];

    const data = JSON.parse(text) as AIRecord[];
    return data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw new Error("Impossible de récupérer les recommandations pour le moment.");
  }
};