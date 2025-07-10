import AsyncStorage from '@react-native-async-storage/async-storage';

export const PlanStorage = {
    // Сохраняем выбранный план
    savePlan: async (plan) => {
        try {
            await AsyncStorage.setItem('@currentPlan', plan);
        } catch (error) {
            console.error('Error saving plan:', error);
        }
    },

    // Загружаем сохраненный план
    loadPlan: async () => {
        try {
            const plan = await AsyncStorage.getItem('@currentPlan');
            return plan || 'FREE'; // По умолчанию FREE если ничего не сохранено
        } catch (error) {
            console.error('Error loading plan:', error);
            return 'FREE';
        }
    }
};