import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/images/porshe-911.jpeg')} style={[styles.background, { transform: [{ translateY: -50 }] }]} resizeMode="cover">
      <View style={styles.content}>
        <ThemedText style={styles.title}>Welcome to Car Rental App</ThemedText>
        <ThemedText style={styles.subtitle}>Search for your perfect ride</ThemedText>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter car model or location..."
            placeholderTextColor="#999"
          />
        </View>
        <Link href="/dashboard" style={styles.link}>
          <ThemedText style={styles.linkText}>Go to Dashboard</ThemedText>
        </Link>
      </View>
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  searchContainer: {
    width: '100%',
    marginBottom: 40,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  link: {
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  },
});