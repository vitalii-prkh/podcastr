import {v} from "convex/values";
import {internalMutation, mutation} from "./_generated/server";

export const getUrl = mutation({
  args: {
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

export const createPodcast = internalMutation({
  args: {},
  handler: async (ctx, args) => {
    return "success";
  },
});
