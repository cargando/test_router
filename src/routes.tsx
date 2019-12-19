
import React from 'react';
import { Switch, Route } from 'react-router-dom'; //  , Switch
//import C from './components';
import {Home, Bar, Foo, Task, Mask} from './components';

// const {Home, Bar, Foo, Task, Mask} = C;


export default (
    <Switch>
        <Route path="/">
            <Home>
                <Route path="/foo" render={(props: any) =>(
                    <Foo>
                        <Route exact path="/foo/task"><Task /></Route>
                        <Route exact path="/foo/mask"><Mask /></Route>
                    </Foo>
                )} />
                <Route exact path="/bar" component={Bar} />
            </Home>
        </Route>
    </Switch>);