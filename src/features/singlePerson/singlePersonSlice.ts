import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type PersonInfoType = {
  name: string;
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  known_for_department: string;
  place_of_birth: string;
  profile_path: string;
};

type InitialStateType = {
  isLoading: boolean;
  personInfo: PersonInfoType;
  isBioOpen: boolean;
};

const initialState: InitialStateType = {
  isLoading: true,
  personInfo: <PersonInfoType>{},
  isBioOpen: false,
};

export const getPerson = createAsyncThunk(
  "singlePerson/getPerson",
  async (id: string | undefined, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
      );
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const singlePersonSlice = createSlice({
  name: "singlePerson",
  initialState,
  reducers: {
    toggleBio: (state) => {
      if (state.isBioOpen === false) {
        state.isBioOpen = true;
      } else {
        state.isBioOpen = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPerson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPerson.fulfilled,
        (state, action: PayloadAction<PersonInfoType>) => {
          state.isLoading = false;
          state.personInfo = action.payload;
        }
      )
      .addCase(getPerson.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleBio } = singlePersonSlice.actions;

export const { reducer } = singlePersonSlice;