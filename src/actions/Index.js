import axios from "axios";

export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const SIGNING_IN = "SIGNING_IN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

export const signin = token => dispatch => {
  dispatch({
    type: SIGNIN_SUCCESS,
    payload: token
  })
  
};

export const SIGNINGUP = "SIGNINGUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = user => dispatch => {
  dispatch({
    type: SIGNINGUP
  });
  axios
    .post("https://ruralschoolapp.herokuapp.com/users/user", user)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: SIGNUP_FAIL,
        payload: err
      })
    );
};

export const FETCHING_ISSUES = "FETCHING_ISSUES";

export const getIssues = () => dispatch => {
  dispatch({ type: FETCHING_ISSUES });
  axios
    .get("https://ruralschoolapp.herokuapp.com/error")
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};


export const ADDING_ISSUE = "ADDING_ISSUE";
export const DELETING_ISSUE = "DELETING_ISSUE";

export const addIssue = issue => dispatch => {
  dispatch({ type: ADDING_ISSUE });
  console.log("issue", issue);
  axios
    .post("https://ruralschoolapp.herokuapp.com/error", issue)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const deleteIssue = id => dispatch => {
  dispatch({ type: DELETING_ISSUE });
  axios
    .delete(`https://ruralschoolapp.herokuapp.com/error/${id}`)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const EDITING = "EDITING";
export const EDITED = "EDITED";
export const FAILURE = "FAILURE";

export function editIssue(id, issue) {
  return dispatch => {
    dispatch({ type: EDITING });
    console.log(id, issue);
    axios
      .put(
        `https://ruralschoolapp.herokuapp.com/error/${id}`,
        issue
      )
      .then(response => {
        dispatch({
          type: EDITED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: err
        });
      });
  };
}