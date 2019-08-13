import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { ThemeContext, ThemeColors } from '@react-navigation/core';

class ThemedText extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <Text
        {...this.props}
        style={[{ color: ThemeColors[this.context].label }, this.props.style]}
      />
    );
  }
}

class ThemedStatusBar extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <StatusBar
        barStyle={this.context === 'dark' ? 'light-content' : 'default'}
      />
    );
  }
}

export default {
  Text: ThemedText,
  StatusBar: ThemedStatusBar,
};
