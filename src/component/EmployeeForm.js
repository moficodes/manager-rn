import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardItem, Input } from './common';


class EmployeeForm extends Component {
  daysOfWeek() {
    const daysArr = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

    return daysArr.map((day, index) => {
      return (
        <Picker.Item key={index} label={day} value={day} />
      );
    });
  }

  render() {
    return (
      <View>
      <CardItem>
        <Input
          placeholder="Firstname Lastname"
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
        />
      </CardItem>

      <CardItem>
        <Input
          placeholder="Phone Number"
          value={this.props.phone}
          onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
        />
      </CardItem>

      <CardItem style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
        <Picker
          selectedValue={this.props.shift}
          onValueChange={(text) => this.props.employeeUpdate({ prop: 'shift', value: text })}
        >
          {this.daysOfWeek()}
        </Picker>
      </CardItem>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#9E9E9E'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
