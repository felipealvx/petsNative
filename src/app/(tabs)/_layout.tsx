import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from '@/src/constants/colors';
import { Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: colors.primary,
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      tabBarStyle: {
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
     }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Meus Pets',
          tabBarIcon: ({ color }) => <MaterialIcons name="pets" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="vacinas"
        options={{
          title: 'Vacinas',
          tabBarIcon: ({ color }) => <FontAwesome5 name="syringe" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <FontAwesome name="gear" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
