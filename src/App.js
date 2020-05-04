import React from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {initializeApp} from './redux/reducers/app-reducer';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Nav from './components/Nav';
import Home from './components/Home';
import PostsContainer from './components/Posts/PostsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import Login from './components/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import Contacts from './components/Contacts/Contacts';
import Preloader from './components/common/Preloader';


class App extends React.Component {
	componentDidMount() {
    this.props.initializeApp();
  }
 render(){
	 if(!this.props.initialized){
		 return <Preloader />
	 }
	return ( 
		<div className = "App-wrapper" >
			<HeaderContainer />
			<Nav />
			<div className = "App-content" >
				<Route path = '/profile/:userId?' render = {() => <ProfileContainer /> } /> 
				<Route path = '/home' render = {() => <Home />} />   
				<Route path = '/posts' render = {() => <PostsContainer /> } /> 
				<Route path = '/friends' render = {() => <FriendsContainer /> } />   
				<Route path = '/login' render = {() => <Login / > } />  				 
				<Route path = '/contacts' render = {() => <Contacts /> } />  
				
			</div> 
		</div>			
	)
}
}

const mapStateToProps = (state) => {
	return {
	initialized: state.app.initialized
}
}

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);