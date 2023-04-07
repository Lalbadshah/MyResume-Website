const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const firebaseAuthMiddleware = require("./firebaseAuthMiddleware");
const PROMPT_GROUNDING_CONTEXT = require("./promptGroundingContext");

const openai = require("openai");
const configuration = new openai.Configuration({
  apiKey: "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",
});

const openaiConfig = new openai.OpenAIApi(configuration);
const OPENAI_MODEL = "gpt-3.5-turbo";

function generatePromptContext(prompt) {
  let groundedPromptMessagesWithContext = [];

  groundedPromptMessagesWithContext.push({
    role: "system",
    content: `${PROMPT_GROUNDING_CONTEXT.SYSTEM_DIRECTIVE} \n ${PROMPT_GROUNDING_CONTEXT.SYSTEM_CONTEXT_RESUME} \n ${PROMPT_GROUNDING_CONTEXT.COVER_LETTER}`,
  });

  groundedPromptMessagesWithContext.push({
    role: "user",
    content: `Tell me about his experience at Vektor?`,
  });
  groundedPromptMessagesWithContext.push({
    role: "assistant",
    content: `${PROMPT_GROUNDING_CONTEXT.JOB_HISTORY_PROMPT_VEKTOR}`,
  });

  groundedPromptMessagesWithContext.push({
    role: "user",
    content: `Tell me about his experience at Avenda Health?`,
  });
  groundedPromptMessagesWithContext.push({
    role: "assistant",
    content: `${PROMPT_GROUNDING_CONTEXT.JOB_HISTORY_PROMPT_AVENDA}`,
  });

  groundedPromptMessagesWithContext.push({
    role: "user",
    content: `Tell me about his experience with cloud and AWS development?`,
  });
  groundedPromptMessagesWithContext.push({
    role: "assistant",
    content: `${PROMPT_GROUNDING_CONTEXT.EXPERIENCE_CLOUD}`,
  });

  groundedPromptMessagesWithContext.push({
    role: "user",
    content: `Is he willing to relocate? What is his targeted salary? Is he willing to work On Site? Where is he located? Does he require sponsorship or a visa? `,
  });
  groundedPromptMessagesWithContext.push({
    role: "assistant",
    content: `${PROMPT_GROUNDING_CONTEXT.PREFERENCES}`,
  });

  groundedPromptMessagesWithContext.push({
    role: "user",
    content: `${prompt}`,
  });

  return groundedPromptMessagesWithContext;
}

async function hireAissistPromptManager(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "Server configuration error",
      },
    });
    return;
  }

  const prompt = req.body.prompt || "";
  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "empty query",
      },
    });
    return;
  }

  const userIdentifier = req.body.user;

  try {
    const completion = await openaiConfig.createChatCompletion({
      model: OPENAI_MODEL,
      messages: generatePromptContext(prompt),
      temperature: 0.6,
      user: userIdentifier,
    });
    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

const corsOptions = {
  origin: "http://localhost:3000",
  preflightContinue: true,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

// app.options('*', cors(corsOptions), handlePreFlight)
app.post("/hireaissist", firebaseAuthMiddleware, hireAissistPromptManager);

//Initialize so that middleware can use Firebase Auth
admin.initializeApp();
// Export the api to Firebase Cloud Function
exports.app = functions.https.onRequest(app);
