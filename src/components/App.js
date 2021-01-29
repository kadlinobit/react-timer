import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import { Router, Route } from 'react-router-dom';
import  history from 'history/history';   

import TimerAdd from 'components/TimerAdd';
import TimerEdit from 'components/TimerEdit';
import TimerDelete from 'components/TimerDelete';
import TimersDashboard from 'components/TimersDashboard';

const App = () => {
    return(    
        <Router history={history}>  
            <Menu fixed inverted>
                <Container>
                    <Menu.Item header>
                        <Icon name="time" size="large"></Icon>
                        Task Timer
                    </Menu.Item>
                </Container>
            </Menu>
            <Container content>
                <Route path="/" exact component={ TimersDashboard } />
                <Route path="/timer/delete/:id" component={ TimerDelete } />
                <Route path="/timer/edit/:id" component={ TimerEdit } />
                <Route path="/timer/add" component={ TimerAdd } />
            </Container>
        </Router>
    );
};

export default App;