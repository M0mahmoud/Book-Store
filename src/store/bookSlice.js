import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    try {
      bookData.userName = getState().auth.userName;
      const res = await fetch("http://localhost:5000/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      // Report
      dispatch(logInsert({ name: "insertBook", status: "success" }));
      return data;
    } catch (e) {
      // Report
      dispatch(logInsert({ name: "insertBook", status: "falid" }));
      return rejectWithValue(e.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/books/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const bookInfo = createAsyncThunk(
  "book/bookInfo",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/books/${data.id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  books: [],
  isLoading: true,
  error: null,
  oneBookInfo: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    // Get Book
    builder.addCase(bookInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.oneBookInfo = action.payload;
    });

    //Fetch Books
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Insert Books
    builder.addCase(insertBook.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(insertBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    });
    builder.addCase(insertBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Delete Books
    builder.addCase(deleteBook.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((el) => el.id !== action.payload.id);
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default bookSlice.reducer;
