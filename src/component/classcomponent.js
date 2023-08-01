import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

import { deNumber, inNumber } from '../Actionsfile/Actions';
import { connect } from 'react-redux';
const mapstatetoProps = (props) => {
    return {
        inc: props.increment,
        dec:props.decrment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(inNumber()),
        decrment: () => dispatch(deNumber())
   
    }
}
class classcomponent extends Component {
    render() {

        return (
            <View>
                <Text>classcomponent {this.props.inc}</Text>
                <Text>classcomponent {this.props.dec}</Text>
                <Button title='inc' onPress={() => { this.props.increment()}} />
                <Button title='dec' onPress={() => { this.props.decrment()}} />
            </View>
        )
    }
}
export default connect(mapstatetoProps,mapDispatchToProps)(classcomponent);
const styles = StyleSheet.create({})