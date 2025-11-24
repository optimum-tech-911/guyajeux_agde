import { GoogleGenAI, Type } from "@google/genai";
import { AIRecord } from "../types";

// Public key expected as Vite env var. If absent, fall back to local suggestions
const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const FALLBACK_RECS: AIRecord[] = [
  {
    name: "Cascadia",
    description: "Puzzle familial de placement de tuiles et faune",
    reason: "Accessible, zen et parfait autour d'une boisson.",
  },
  {
    name: "7 Wonders Duel",
    description: "Duel tendu avec cartes et construction de merveilles",
    reason: "Idéal à deux pour une partie rapide mais stratégique.",
  },
  {
    name: "So Clover!",
    description: "Jeu coopératif d'association de mots",
    reason: "Met de l'ambiance en quelques minutes pour 4-6 joueurs.",
  },
];

export const getGameRecommendations = async (userPreference: string): Promise<AIRecord[]> => {
  if (!ai) {
    console.warn("Gemini API key absente : retour des suggestions locales.");
    return FALLBACK_RECS;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
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
              name: { type: Type.STRING, description: "Le nom exact du jeu" },
              description: { type: Type.STRING, description: "Brève description du style de jeu" },
              reason: { type: Type.STRING, description: "Pourquoi ce jeu correspond à la demande" },
            },
            required: ["name", "description", "reason"],
          },
        },
      },
    });

    const text = response.text;
    if (!text) return FALLBACK_RECS;

    return JSON.parse(text) as AIRecord[];
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return FALLBACK_RECS;
  }
};
