import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: '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', dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion(message: string) {
  try {
    const response = await groq.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'llama3-8b-8192',
    });
    return response.choices[0]?.message?.content || 'No response received.';
  } catch (error) {
    console.error('Error fetching chat completion:', error);
    throw new Error('Error fetching chat completion.'); // Throw to be caught in AnalyzePage
  }
}
