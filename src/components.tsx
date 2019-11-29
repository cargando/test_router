import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from './store/actions';

import {Link} from "react-router-dom"; // useRouteMatch

const areEqual = (prev: any, next: any) => {
    console.log("areEqual: Mount");
    console.log("CMP = ", prev, next);
    if (prev === next) {
        return true;
    }

    return false;
};

function Home(p: any) {
    const cnt = useSelector(((state: any) => state.app.cnt))
    const text = useSelector(((state: any) => state.app.text))
    useEffect(() => {
        console.log("Home: Mount");
        return () => console.log("Home: UNMount");
    }, [])
    return (<div style={{border: "1px solid red"}}><br />This is HOME (cnt: {cnt}, txt: {text})<br/>{p.children}</div>)
};

function Foo(props: any) {
    // let { path, url } = useRouteMatch();
    useEffect(() => {
        console.log("Foo: Mount");
        return () => console.log("Foo: UNMount");
    }, []);

    const styles = {
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
    };
    return (
        <div  style={{border: "1px solid green", margin: "5px"}}><br />This is Foo<br />
        <div style={styles}>
            <Link className="App-link" to="/foo/task">sub child Task</Link><br />
            <Link className="App-link" to="/foo/mask">sub child Mask</Link><br />
        </div>
        <hr /><br />
            {props.children}

    </div>)
};

function Mask() {
    useEffect(() => {
        console.log("Mask: Mount");
        return () => console.log("Mask: UNMount");
    }, [])
    return (<div style={{border: "1px solid yellow", margin: "5px"}}><br />This is Mask</div>)
};


function Task() {
    const cnt = useSelector(((state: any) => state.app.cnt))
    const text = useSelector(((state: any) => state.app.text))
    const dispatcher = useDispatch();

    useEffect(() => {
        console.log("Task: Mount");
        return () => console.log("Task: UNMount");
    }, [])

    function handleClick(tp="inc") {
        dispatcher({
            type: actions.incCnt.getType(),
            payload: (tp === "inc" ? cnt + 1: cnt -1)
        });
    }
    function handleChange(e: any) {
        const {target = {}} = e;
        dispatcher({
            type: actions.changeText.getType(),
            payload: target.value || ""
        });
    }
    return (
        <div style={{border: "1px solid blue", margin: "5px"}}><br />This is Task<br />
        Counter: {cnt}<br />
        <input type="text" onChange={handleChange} value={text}/><br />
        <button onClick={() => handleClick("inc")}>increment</button>
        <button onClick={() => handleClick("dec")}>decrement</button>
        </div>)
};


function Bar() {
    useEffect(() => {
        console.log("Bar: Mount");
        return () => console.log("Bar: UNMount");
    }, [])
    return (<div style={{border: "1px solid yellow", margin: "5px"}}><br />This is Bar</div>)
};


function Nav(props: any) {
    useEffect(() => {
        console.log("Nav: Mount");
        return () => console.log("Nav: UNMount");
    }, [])
    return (
        <div>
            <nav style={{display: "flex", width: "100%", justifyContent: "space-evenly"}}>
                <Link className="App-link" to="/">Home</Link><br />
                <Link className="App-link" to="/foo">Foo</Link><br />
                <Link className="App-link" to="/bar">Bar</Link><br />
            </nav><br />
            <hr />
            {props.children}
    </div>)
};



Home.whyDidYouRender = true;
Nav.whyDidYouRender = true;
Bar.whyDidYouRender = true;
Task.whyDidYouRender = true;
Mask.whyDidYouRender = true;
Foo.whyDidYouRender = true;

export default {
    Home: React.memo(Home, areEqual),
    Nav: React.memo(Nav),
    Bar: React.memo(Bar),
    Task: React.memo(Task),
    Mask: React.memo(Mask),
    Foo: React.memo(Foo),
};
