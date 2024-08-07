import Prompt from "@app/models/prompt";
import { connectToDB } from "@app/utils/database";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
