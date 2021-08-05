import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Checkout from './pages/checkout/checkout.component'

import { auth, buatProfilUserDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'


import { selectCurrentUser } from './redux/user/user.selector'

class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {

        const { setCurrentUser } = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            // userAuth adalah mengecek apakah user telah login dengan tombol loginWithGoogle atau belum
            if (userAuth)
            {
                const userRef = await buatProfilUserDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    // console.log(snapshot); => hanya menampilkan exist true dan id
                    // console.log(snapshot.data()); => menampilkan displayName, email, dll

                    // setelah membuat pofil user maka update state currentUser dengan hasil callaback userRef
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });
            } else
            {
                setCurrentUser(userAuth)
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route path="/checkout" component={Checkout}></Route>
                    <Route exact path="/signIn" render={() => this.props.currentUser ?
                        (<Redirect to="/" />) :
                        (<SignInAndSignUp />)
                    }></Route>
                </Switch>
            </div >
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
