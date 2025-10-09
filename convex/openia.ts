import OpenAI from "openai";
import {v} from "convex/values";
import {action} from "./_generated/server";

const openai = new OpenAI();

export const generateAudioAction = action({
  args: {
    input: v.string(),
    voice: v.string(),
  },
  handler: async (_, args) => {
    const {voice, input} = args;
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice,
      input,
    });

    const buffer = await mp3.arrayBuffer();

    return buffer;
  },
});

export const generateThumbnailAction = action({
  args: {
    prompt: v.string(),
  },
  handler: async (_, {prompt}) => {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    const url = response.data?.[0].url;

    if (!url) {
      throw new Error("Error generating thumbnail");
    }

    const imageResponse = await fetch(url);
    const buffer = await imageResponse.arrayBuffer();

    return buffer;
  },
});
