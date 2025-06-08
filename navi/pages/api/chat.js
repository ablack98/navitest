
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { messages, tone } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: `You are Navi, a warm and supportive coach. Speak in a ${tone} tone.` },
        ...messages
      ],
      temperature: 0.7
    });

    return res.status(200).json({ result: completion.choices[0].message });
  } catch (err) {
    console.error('OpenAI error:', err);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
}
