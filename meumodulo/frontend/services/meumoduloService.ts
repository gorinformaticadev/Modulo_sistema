import api from '@/lib/api';

export const meumoduloService = {
    getAll: async (filters?: any) => {
        return api.get('/api/meumodulo', { params: filters });
    },

    getStats: async () => {
        return api.get('/api/meumodulo/stats');
    },

    getNotificationConfigs: async () => {
        return api.get('/modules/meumodulo/config/notifications');
    },

    createNotificationConfig: async (data: any) => {
        return api.post('/modules/meumodulo/config/notifications', data);
    }
};
