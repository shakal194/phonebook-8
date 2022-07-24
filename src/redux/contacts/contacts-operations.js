import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const saveContact = createAsyncThunk(
  'contacts/saveContact',
  async contact => {
    await axios.post('/contacts', contact);
    return contact;
  }
);
