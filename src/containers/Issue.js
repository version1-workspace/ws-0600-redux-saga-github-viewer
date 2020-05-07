import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Issue from '../components/templates/Issue'
import { actionCreators } from '../actions'

const mapStateToProps = ({ user, issue }) => {
  return {
    data: issue.data,
    user: user.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchIssueList: actionCreators.issueFetchRequested,
    createIssue: actionCreators.issueCreateRequested,
    updateIssue: actionCreators.issueUpdateRequested,
    showModal: actionCreators.showModal,
    removeModal: actionCreators.removeModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue)
