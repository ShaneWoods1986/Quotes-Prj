export interface QuoteState {
    quotes: {quote: string, added: Date}[];
    loading: boolean;
}

export const initialState: QuoteState = {
    quotes: [],
    loading: true
}