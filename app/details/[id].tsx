import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const mockCars = {
  '1': {
    name: 'Toyota Camry',
    price: '$50/day',
    specs: {
      year: 2023,
      fuel: 'Gasoline',
      seats: 5,
      transmission: 'Automatic',
    },
    description: 'Comfortable sedan for daily use.',
  },
  '2': {
    name: 'Honda Civic',
    price: '$40/day',
    specs: {
      year: 2023,
      fuel: 'Gasoline',
      seats: 5,
      transmission: 'Automatic',
    },
    description: 'Compact car for city driving.',
  },
  '3': {
    name: 'Ford Mustang',
    price: '$80/day',
    specs: {
      year: 2023,
      fuel: 'Gasoline',
      seats: 4,
      transmission: 'Manual',
    },
    description: 'Sporty convertible for fun drives.',
  },
};

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const carId = id || '1';
  const car = mockCars[carId as keyof typeof mockCars];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.imagePlaceholder} />
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>{car.name}</ThemedText>
        <ThemedText style={styles.price}>{car.price}</ThemedText>
        <ThemedText style={styles.description}>{car.description}</ThemedText>
        <ThemedView style={styles.specsContainer}>
          <ThemedText style={styles.specsTitle}>Specifications</ThemedText>
          <ThemedText>Year: {car.specs.year}</ThemedText>
          <ThemedText>Fuel Type: {car.specs.fuel}</ThemedText>
          <ThemedText>Seats: {car.specs.seats}</ThemedText>
          <ThemedText>Transmission: {car.specs.transmission}</ThemedText>
        </ThemedView>
        <TouchableOpacity style={styles.rentButton}>
          <ThemedText style={styles.buttonText}>Rent Now</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
    marginBottom: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  specsContainer: {
    marginBottom: 30,
  },
  specsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rentButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});