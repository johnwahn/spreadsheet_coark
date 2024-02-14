import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useRoute } from '@react-navigation/native';

const Spreadsheet = () => {
  const route = useRoute();
  const { numberOfResturants } = route.params;
  const rows = Array.from(Array(11).keys());
  const columns = Array.from(Array(parseInt(numberOfResturants, 10)).keys());

  return (
    <View style={styles.container}>
      
      {/* Table Header */}
      <View style={[styles.row, styles.headerRow]}>
        {columns.map((col, index) => (
          <View key={index} style={[styles.cell, styles.headerCell]}>
            <Text style={styles.cellText}>Column {index + 1}</Text>
          </View>
        ))}
      </View>

      {/* Table Body */}
      {rows.map((row, index) => (
        <View key={index} style={styles.row}>
          {columns.map((col, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <Text style={styles.cellText}>{`Row ${index + 1}, Column ${colIndex + 1}`}</Text>
            </View>
          ))}
        </View>
      ))}

    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerRow: {
    borderTopWidth: 1,
  },
  headerCell: {
    backgroundColor: '#f0f0f0',
  },
  cellText: {
    fontSize: 14,
  },
});

export default Spreadsheet;
