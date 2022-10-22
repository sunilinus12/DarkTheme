import { StyleSheet, Text, View, Appearance, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const colorscheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(false);
  Appearance.addChangeListener(e => {
    if (e.colorScheme === 'dark') {
      setTheme(true);
    } else setTheme(false);
  });


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme ? 'black' : 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

    </View>
  );
}

const styles = StyleSheet.create({});
