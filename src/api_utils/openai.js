const {Configuration, OpenAIApi} = require("openai")// Make sure to import the required modules
const dotenv = require("dotenv").config()


async function testrun() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Suggest 3 University Programs based on my interests. the university programs should be available in universities across Ghana.", // Provide the role and content for the system message
        },
        {
          role: "user",
          content: "I like Science, ICT and Mathematics. I love the technology field and i want to be a data scientist.", // Provide the role and content for the user message
        },
      ],
      temperature: 0.6,
    });
    return completion.data.choices[0].message.content; // Access the message content instead of text
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

testrun().then((res) => console.log(res)); // Instead of setting a timeout, use a Promise and then() to handle the response
