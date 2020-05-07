/*
 * action types
 */

/* issue */
export const ISSUE_ADD = 'ISSUE_ADD'
export const ISSUE_REMOVE = 'ISSUE_REMOVE'
export const ISSUE_UPDATE = 'ISSUE_UPDATE'
export const ISSUE_FETCH_REQUESTED = 'ISSUE_FETCH_REQUESTED'
export const ISSUE_FETCH_SUCCEEDED = 'ISSUE_FETCH_SUCCEEDED'
export const ISSUE_FETCH_FAILED = 'ISSUE_FETCH_FAILED'
export const ISSUE_CREATE_REQUESTED = 'ISSUE_CREATE_REQUESTED'
export const ISSUE_CREATE_SUCCEEDED = 'ISSUE_CREATE_SUCCEEDED'
export const ISSUE_CREATE_FAILED = 'ISSUE_CREATE_FAILED'
export const ISSUE_UPDATE_REQUESTED = 'ISSUE_UPDATE_REQUESTED'
export const ISSUE_UPDATE_SUCCEEDED = 'ISSUE_UPDATE_SUCCEEDED'
export const ISSUE_UPDATE_FAILED = 'ISSUE_UPDATE_FAILED'

/* ui/modal */
export const MODAL_HIDE = 'MODAL_HIDE'
export const MODAL_PUSH = 'MODAL_PUSH'
export const MODAL_POP = 'MODAL_POP'

/* user */
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED'
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED'
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED'

/*
 * action creators
 */

const showModal = ({ component }) => {
  return {
    type: MODAL_PUSH,
    payload: { component }
  }
}

const removeModal = () => {
  return {
    type: MODAL_POP,
    payload: {}
  }
}

const hideModal = () => {
  return {
    type: MODAL_HIDE,
    payload: {}
  }
}

/* user */
const userFetchRequested = () => {
  return {
    type: USER_FETCH_REQUESTED
  }
}

/* issue */
const issueFetchRequested = (payload) => {
  return {
    type: ISSUE_FETCH_REQUESTED,
    payload
  }
}

const issueCreateRequested = (payload) => {
  return {
    type: ISSUE_CREATE_REQUESTED,
    payload
  }
}

const issueUpdateRequested = (payload) => {
  return {
    type: ISSUE_UPDATE_REQUESTED,
    payload
  }
}

export const actionCreators = {
  showModal,
  removeModal,
  hideModal,
  userFetchRequested,
  issueFetchRequested,
  issueCreateRequested,
  issueUpdateRequested
}
