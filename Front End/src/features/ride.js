import {createSlice} from '@reduxjs/toolkit'

export const rideSlice = createSlice ({
    name:'ride',
    initialState : {values: {pickup : 'ddf' , destination : ''}},
    reducers: { 
        submit : (state , action) => {
                state.values = action.payload
        }
    }
});

export default rideSlice.reducer;
export const {submit} = rideSlice.actions;