import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  showList() {
    return this.props.myPosts.map(p => {
      return (
        <div className='item' key={p.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
            <UserHeader userId={p.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props.myPosts);
    return <div className='ui relaxed divided list'>{this.showList()}</div>;
  }
}

const mapStateToProps = state => {
  return { myPosts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
