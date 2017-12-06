/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TextInput,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from 'react-native-checkbox';
import Modal from 'react-native-modal';
import ToDo from '../containers/ToDo';
import { Provider } from 'react-redux';
import {add} from '../actions';
import store from '../store';

class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      new: ''
    }
    Icon.getImageSource('filter',20,'white').then((source)=> {
      Icon.getImageSource('pencil',20,'white').then((source1)=> {
        this.props.navigator.setButtons({
          rightButtons: [{
            id: 'filter', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
            buttonColor: "#000",
            icon: source
          }],
          fab: {
            collapsedId: 'new',
            collapsedIcon: source1,
            backgroundColor: "#777"
          },
          animated: true
        });
      });
    });

    /*const subscribe = store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch(add('Hello this is me here.'));*/

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event){
    if(event.id == 'new'){
      this.showModal();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlatList
              style={styles.list}
              data={store.getState()}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
          />
          <Modal
            isVisible={this.state.isModalVisible}
            transparent>
            <ToDo store={store} onPress={this.onPress}/>
          </Modal>
        </View>
      </Provider>
    );
  }

  renderItem = (rowData) => {
    return(
      <TouchableHighlight style={{padding:10,flex:1}}>
        <View>
          <CheckBox
            checked={rowData.item.done}
            label={rowData.item.text}
            labelStyle={{paddingRight:50}}
            onChange={this.setDone}
          />
        </View>
      </TouchableHighlight>
    );
  }

  renderSeparator = () => {
    return(
      <View style={styles.separator} />
    );
  }

  setDone = (checked) => {
    console.log('I am checked', checked);
  }

  onPress = () => {
    this.hideModal();
    store.dispatch(add('hi working great.. '));

    /*var todos = this.state.todos;
    todos.push({
      id: todos.length,
      text: this.state.new,
      done: false
    })
    this.setState({todos,new:''});*/

  }

  showModal = () => {
    this.setState({isModalVisible: true})
  }

  hideModal = () => {
    this.setState({isModalVisible: false})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flex: 1,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#000",
  }
});

/*const mapProps = state => ({
  // admob: state.admob
});

const mapActions = (dispatch) => {
  const { init } = bindActionCreators(actions, dispatch);

  return {
    init
  };
};

export default connect(mapProps,mapActions)(App);*/

export default App;
