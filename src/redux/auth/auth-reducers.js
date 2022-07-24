import { createReducer } from '@reduxjs/toolkit';

import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const dataAuthReducer = createReducer(initialState, {
  [register.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logIn.fulfilled]: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
  [getCurrentUser.fulfilled]: (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
  },
});

export const errorAuthReducer = createReducer(null, {
  [register.rejected]: (_, { payload }) => payload.response.data,
  [logIn.rejected]: (_, { payload }) => payload.response.data,
  [register.pending]: () => null,
  [register.fulfilled]: () => null,
  [logIn.pending]: () => null,
  [logIn.fulfilled]: () => null,
});

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//   },
// });
// export const authReducer = authSlice.reducer;
// export const authReducer = combineReducers({
//   user: userReducer,
//   error: errorReducer,
// });
