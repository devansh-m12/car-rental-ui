import { Link } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

interface Car {
  id: string;
  name: string;
  price: string;
  image: string; // placeholder
}

const mockCars: Car[] = [
  { id: '1', name: 'Toyota Camry', price: '$50/day', image: 'placeholder' },
  { id: '2', name: 'Honda Civic', price: '$40/day', image: 'placeholder' },
  { id: '3', name: 'Ford Mustang', price: '$80/day', image: 'placeholder' },
];

export default function DashboardScreen() {
  const renderCar = ({ item }: { item: Car }) => (
    <TouchableOpacity style={styles.carItem}>
      <View style={styles.carImagePlaceholder} />
      <ThemedView style={styles.carInfo}>
        <ThemedText style={styles.carName}>{item.name}</ThemedText>
        <ThemedText style={styles.carPrice}>{item.price}</ThemedText>
        <Link href={`/details/${item.id}`} asChild>
          <TouchableOpacity style={styles.viewButton}>
            <ThemedText style={styles.buttonText}>View Details</ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Available Cars</ThemedText>
      <FlatList
        data={mockCars}
        renderItem={renderCar}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  carItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  carImagePlaceholder: {
    width: 80,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginRight: 15,
  },
  carInfo: {
    flex: 1,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});