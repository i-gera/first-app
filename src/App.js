import React from 'react';
import { compose } from "redux";
import { Provider, connect } from 'react-redux';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import store from './redux/redux-store.js';
import {initializeApp} from './redux/reducers/app-reducer';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import Nav from './components/Nav';
import Home from './components/Home';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/common/Preloader';
import { withSuspense } from './hoc/withSuspense';
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));
const PostsContainer = React.lazy(() => import('./components/Posts/PostsContainer'));
const Login = React.lazy(() => import('./components/Login'));

class AppContent extends React.Component {
	componentDidMount() {
    this.props.initializeApp();
  }
 render(){
	if(!this.props.initialized){
		 return <Preloader />
	}
	return ( 	
			<div className = "App-wrapper">
				<HeaderContainer />
				<Nav />
				<div className = "App-content" >
					<Route path = '/profile/:userId?' render = {() => <ProfileContainer /> } /> 
					<Route path = '/home' render = {() => <Home />} />   
					<Route path = '/posts' render = {withSuspense(PostsContainer)} /> 
					<Route path = '/friends' render = {withSuspense(FriendsContainer)}/>    
					<Route path = '/login' render = {withSuspense(Login)}/>  				 
					<Route path = '/contacts' render = {withSuspense(Contacts)} />  				
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

const AppContentContainer=  compose(withRouter, connect(mapStateToProps, { initializeApp }))(AppContent);

const App = (props) => {
	return (<HashRouter>
			    <Provider store={store}>
                     <AppContentContainer />
                </Provider>
	    	</HashRouter>
			)
}
export default App;
