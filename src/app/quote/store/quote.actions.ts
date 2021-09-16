import { ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

type AC<T = void> = T extends void
? ActionCreator<string, () => TypedAction<string>>
: ActionCreator<string, (props: T) => T & TypedAction<string>>;

interface QuoteActions {
    add: AC<{ quote: string }>;
    load: AC;
    error: AC;
}

export const quoteActions: QuoteActions = {
    add: createAction('[Adding Quote] Receive Quote', props<{ quote: string}>()),
    load: createAction('[Quotes] Fetch Quote'),
    error: createAction('[Quote Error] Fetch Quote Error')
};