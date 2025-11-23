import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  productCount: number;
}

export const Header = ({ productCount }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>🛒 Loja Virtual</Text>
      <Text style={styles.headerSubtitle}>
        {productCount} produtos disponíveis
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e7ff',
    fontWeight: '500',
  },
});
