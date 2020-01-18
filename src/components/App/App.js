import React from 'react';
import Episode from '../Episode/Episode';
import Starship from '../Starship/Starship';
import { Switch, Route, Link} from 'react-router-dom';
const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Episode} />
                <Route exact path='/starship/:link' component={Starship} />
            </Switch>
            
        </div>
    )
}

export default App;