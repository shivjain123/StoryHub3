import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
          <KeyboardAvoidingView style={styles.container}
          behavior="padding" enabled>
               <Header 
                    backgroundColor = {'pink'}
                     centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30}
                    }}
                />
          </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});