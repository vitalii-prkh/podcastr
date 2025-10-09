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
