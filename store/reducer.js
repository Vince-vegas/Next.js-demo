import { createSlice } from '@reduxjs/toolkit';

const number = createSlice({
  name: 'number',
  initialState: 0,
  reducers: {
    onAdd: (state, action) => {
      return state + 1;
    },
  },
});

const { onAdd } = number.actions;

export const onIncrement = () => onAdd({ type: onAdd.type });

export default number.reducer;
