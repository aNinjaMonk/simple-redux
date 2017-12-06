import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import {add} from '../actions';

class ToDo extends Component {
  constructor(props){
    super(props);
    this.state = {
      new: ''
    }

    const subscribe = store.subscribe(()=> {
      console.log(store.getState());
    });
  }

  render(){
    return(
      <View style={{backgroundColor: "#fff", height:150}}>
        <TextInput
          style={{flex:0.8,padding:10}}
          placeholder="Add Todo"
          value={this.state.new}
          onChangeText={(text) => this.setState({new: text})}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <View style={{flex:0.2}}>
          <Button
            title="ok"
            onPress={this.props.onPress}/>
        </View>
      </View>
    )
  }
}
/*let AddToDo = ({ dispatch }) => {
  return (
    <View style={{backgroundColor: "#fff", height:150}}>
      <TextInput
        style={{flex:0.8,padding:10}}
        placeholder="Add Todo"
        value={this.state.new}
        onChangeText={(text) => this.setState({new: text})}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
      <View style={{flex:0.2}}>
        <Button
          title="ok"
          onPress={() => {
            dispatch(addTodo(this.state.new))
          }}/>
      </View>
    </View>
  )
}*/

/*const mapProps = state => ({
  // admob: state.admob
});

const mapActions = (dispatch) => {
  const { init } = bindActionCreators(actions, dispatch);

  return {
    init
  };
};*/

export default connect()(ToDo);
