import React from 'react'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

const HalamanTopi = (props) => {
    console.log(props);
    return (
        <div>
            <Link to="topics">topics</Link>
            <button onClick={() => props.history.push('/topics')}>topi</button>
            <h1>Halaman Topi</h1>
        </div>
    )
}
const TopicList = (props) => {
    console.log(props)
    return (
        <div>Topic List</div>
    )
}


const TopicDetail = (props) => {
    console.log(props)
    return (
        <div>Topic Detail {props.match.params.topicId}</div>
    )
}


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/hats" component={HalamanTopi}></Route>
                <Route exact path="/topics" component={TopicList}></Route>
                <Route exact path="/topics/:topicId" component={TopicDetail}></Route>
            </Switch>
        </div>
    )
}

export default App;
