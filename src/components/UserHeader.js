import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const userino = this.props.myUser;
    if (!userino) return null;
    return <div className='header'>{userino.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { myUser: state.users.find(u => u.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
