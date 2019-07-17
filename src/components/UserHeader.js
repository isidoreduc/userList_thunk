import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const userino = this.props.myUsers.find(u => u.id === this.props.userId);
    if (!userino) return null;
    return <div className='header'>{userino.name}</div>;
  }
}

const mapStateToProps = state => {
  return { myUsers: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
