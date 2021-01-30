import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';
import TimersDashboard from 'components/TimersDashboard';

const App = () => {

    return(    
        <>
            <Menu inverted>
                <Container>
                    <Menu.Item header>
                        <Icon name="time" size="large"></Icon>
                        Task Timer
                    </Menu.Item>
                </Container>
            </Menu>
            <Container>
                <TimersDashboard />
            </Container>
        </>
    );
};

export default App;