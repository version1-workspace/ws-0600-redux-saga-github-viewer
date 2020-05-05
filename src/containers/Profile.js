import { connect } from 'react-redux'
import Profile from '../pages/Profile'

const mapStateToProps = ({ user }) => {
  return {
    user: user.data
  }
}

export default connect(mapStateToProps, null)(Profile)
