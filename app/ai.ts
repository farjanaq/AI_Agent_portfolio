import { createAI } from 'ai/rsc';
// biome-ignore lint/style/useImportType: <explanation>
import {ClientMessage,ServerMessage, submitUserMessage } from './actions';


export type AIState = ServerMessage[];
export type UIState = ClientMessage[];


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const AI = createAI<any[], React.ReactNode[]>({
  initialUIState: [],
  initialAIState: [],
  actions: {
    submitUserMessage,
  },
});