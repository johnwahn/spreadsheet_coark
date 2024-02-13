import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const Spreadsheet = () => {
  const tableHead = ['ID', 'Name', 'Age'];
  const tableData = [
    [1, 'John Doe', 25],
    [2, 'Jane Smith', 30],
    // Add more rows as needed
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default Spreadsheet;
