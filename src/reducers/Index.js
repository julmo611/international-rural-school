import {
    SIGNING_IN,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNINGUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    FETCHING_ISSUES,
    SUCCESS,
    ERROR,
    ADDING_ISSUE,
    DELETING_ISSUE,
    EDITING,
    EDITED,
    FAILURE
  } from '../actions';
  
  export const initialState = {
    user: {},
    fetching: false,
    signingup: false,
    signingIn: false,
    fetchingIssues: false,
    issues: [],
    addingIssue: false,
    updatingIssue: false,
    deletingIssue: false,
    editing: false,
    edited: false,
    editForm: false,
    token: localStorage.getItem('token'),
    error: null,
    editId: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNINGUP:
        return {
          ...state,
          error: null,
          signingup: true
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          error: null,
          signingup: false
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          error: action.payload,
          signingup: false
        };
      case SIGNING_IN:
        return {
          ...state,
          error: null,
          signingIn: true
        };
      case SIGNIN_SUCCESS:
        return {
          ...state,
          signingIn: false,
          token: action.payload,
        };
      case SIGNIN_FAIL:
        return {
          ...state,
          signingIn: false,
          error: action.payload
        };
      case FETCHING_ISSUES:
        return {
          ...state,
          fetchingIssues: true,
          error: null
        };
      case SUCCESS:
        return {
          ...state,
          issues: action.payload,
          error: null
        };
      case ERROR:
        return {
          ...state,
          error: action.payload
        };
      case ADDING_ISSUE:
        return {
          ...state,
          addingIssue: true,
          error: null
        };
      case DELETING_ISSUE:
        return {
          ...state,
          deletingIssue: true,
          error: null
        };
      case EDITING:
        return {
          ...state,
          editing: true,
          error: null
        };
      case EDITED:
        return {
          ...state,
          issues: action.payload,
          edited: false,
          error: null
        };
      case FAILURE:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  