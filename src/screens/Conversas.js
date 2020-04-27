import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = createBottomTabNavigator ({
    ConversasStack: {
        screen: ConversasStack,
        navigationOptions: {
            tabBarLabel: 'Conversas'
        }
    },
    ContatoList: {
        screen: ContatoList
    },
    Config: {
        screen: Config
    }
}, {
    //Refatorar altura da Tab
    tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: '#E2E2E2',
        labelStyle: {
            fontSize: 18,
            lineHeight: 50
        },
        style: {
          backgroundColor: '#1DB954',
          height: 50
        } 
      }
});

export default createAppContainer(ConversasNavigator);

