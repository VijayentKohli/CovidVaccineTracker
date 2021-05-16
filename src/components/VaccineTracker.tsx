import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const VaccineTracker: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Vaccine Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
