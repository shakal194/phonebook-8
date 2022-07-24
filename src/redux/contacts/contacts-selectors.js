import { createSelector } from '@reduxjs/toolkit';
export const getAllContacts = state => state.contacts.items;
export const getStateLoading = state => state.contacts.loading;
export const getStateError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
