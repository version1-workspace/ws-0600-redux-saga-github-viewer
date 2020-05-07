import {select, call, put, takeLatest} from 'redux-saga/effects';
import camelcaseKeys from 'camelcase-keys';
import * as api from '../services';
import * as ActionType from '../actions';

const getUser = state => state.user.data

function* fetchIssueList(action) {
  try {
    const user = yield select(getUser)
    const data = yield call(api.fetchIssueList, { owner: user.name });
    const issues = data.reduce((acc, item) => {
      return {...acc, [item.id]: camelcaseKeys(item, {deep: true})};
    }, {});
    yield put({type: ActionType.ISSUE_FETCH_SUCCEEDED, payload: {issues}});
  } catch (e) {
    console.error(e)
    yield put({
      type: ActionType.ISSUE_FETCH_FAILED,
      payload: {message: 'issue一覧の取得に失敗しました'},
    });
  }
}

function* createIssue(action) {
  try {
    const user = yield select(getUser)
    yield call(api.createIssue, { data: action.payload, owner: user.name });
    yield put({ type: ActionType.ISSUE_CREATE_SUCCEEDED });
    yield put({ type: ActionType.ISSUE_FETCH_REQUESTED });
  } catch (e) {
    console.error(e)
    yield put({
      type: ActionType.ISSUE_CREATE_FAILED,
      payload: {message: 'issueの作成に失敗しました'},
    });
  }
}

function* updateIssue(action) {
  try {
    const user = yield select(getUser)
    const { issue, issueNumber } = action.payload
    yield call(api.updateIssue, {
      data: issue,
      issueNumber: issueNumber,
      owner: user.name
    });
    yield put({ type: ActionType.ISSUE_UPDATE_SUCCEEDED });
    yield put({ type: ActionType.ISSUE_FETCH_REQUESTED });
  } catch (e) {
    console.error(e)
    yield put({
      type: ActionType.ISSUE_UPDATE_FAILED,
      payload: {message: 'issueの更新に失敗しました'},
    });
  }
}

function* issueSaga() {
  yield takeLatest(ActionType.ISSUE_FETCH_REQUESTED, fetchIssueList);
  yield takeLatest(ActionType.ISSUE_CREATE_REQUESTED, createIssue);
  yield takeLatest(ActionType.ISSUE_UPDATE_REQUESTED, updateIssue);
}

export default issueSaga;
