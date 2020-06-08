import React from 'react';
import { compose } from "redux";
import { Provider, connect } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import store, { AppStateType } from './redux/redux-store';
import { initializeApp } from './redux/reducers/app-reducer';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import ProfileContainer from './components/Profile/ProfileContainer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import FriendsContainer from './components/Friends/FriendsContainer';
const Contacts = React.lazy(() => import('./components/Contacts/Contacts'));
const PostsContainer = React.lazy(() => import('./components/Posts/PostsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}
const SuspendedPosts = withSuspense(PostsContainer)
const SuspendedLogin = withSuspense(Login)
const SuspendedContacts = withSuspense(Contacts)

class AppContent extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some errors occured");
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="App-wrapper" >
                <HeaderContainer />
                <Nav />
                <div className="App-content" >
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/home' render={() => <Home />} />
                    <Route path='/posts' render={() => <SuspendedPosts />} />
                    <Route path='/friends' render={() => <FriendsContainer />} />
                    <Route path='/login' render={() => <SuspendedLogin />} />
                    <Route path='/contacts' render={() => <SuspendedContacts />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContentContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(AppContent);

export const App: React.FC = () => {
    return (<HashRouter>
        <Provider store={store} >
            <AppContentContainer />
        </Provider>
    </HashRouter>
    )
}
