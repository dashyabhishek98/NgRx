export interface CounterState {
    counter : number,
    ChannelName: string
} 

export const initialState : CounterState= {
    counter : 0,
    ChannelName : 'Leela Web Dev'
};