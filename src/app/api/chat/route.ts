import { deepseek } from '@ai-sdk/deepseek'
import { streamText } from 'ai'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    // model: deepseek('deepseek-reasoner'), // deepseek-reasoner is the latest reasoning model DeepSeek-R1
    model: deepseek('deepseek-chat'), // The deepseek-chat model has been upgraded to DeepSeek-V3
    messages,
  })

  return result.toDataStreamResponse({
    sendReasoning: true,
  })
}