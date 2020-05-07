import axios from 'axios';

const username = process.env.REACT_APP_GITHUB_USERNAME;
const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;

const client = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  auth: {
    username,
    password: accessToken,
  },
});

export const fetchUser = async () => {
  try {
    const res = await client.get('/user');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchIssueList = async ({ owner, params}) => {
  try {
    const res = await client.get(`/repos/${owner}/${repo}/issues`, {
      params,
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const createIssue = async ({owner, data}) => {
  try {
    const res = await client.post(`/repos/${owner}/${repo}/issues`, data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const updateIssue = async ({owner, issueNumber, data}) => {
  try {
    const res = await client.post(
      `/repos/${owner}/${repo}/issues/${issueNumber}`,
      data
    );
    if (res.data) {
      return res.data
    }
  } catch (e) {
    console.error(e);
  }
};
