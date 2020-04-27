import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';


const Stack = createStackNavigator({
  ConversasList: {
    screen: ConversasList
  },
  ConversaInterna: {
    screen: ConversaInterna
  }
});

const ConversasStackNavigator = createAppContainer(Stack);

export default ConversasStackNavigator;