import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';


const ConversasStackNavigator = createStackNavigator({
  ConversasList: {
    screen: ConversasList
  },
  ConversaInterna: {
    screen: ConversaInterna,
  }
});

ConversasStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default ConversasStackNavigator;