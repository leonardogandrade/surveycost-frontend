import React from 'react';
import { Route , Switch } from 'react-router-dom';

import Thanks from '../src/components/thanks';
import Survey from './components/survey/index';

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Survey}/>
            <Route path='/thanks' component={Thanks}/>
        </Switch>
    )
}

export default Routes;