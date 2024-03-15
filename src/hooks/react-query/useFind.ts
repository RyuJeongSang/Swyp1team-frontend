import {findId, findPassword} from '../../api/Find';
import {PasswordFormData} from '../../types/server/formData';
import {useRouter} from 'next/router';
import {useMutation} from '@tanstack/react-query';

export const useFindId = () => {
    const router = useRouter();
    
    const { mutate } = useMutation({
        mutationFn: (email: string) => findId(email),
        onSuccess: (response) => {
            router.push({
                pathname: '/Find/Complete',
                query: { userId: response.data.data.userId },
            });
        },
        onError: (error) => {
            console.error('Find ID failed:', error);
        }
    });
    
    return { mutate };
};

export const useFindPassword = () => {
    const router = useRouter();
    
    const { mutate } = useMutation({
        mutationFn: (data:PasswordFormData) => findPassword(data.userId, data.email),
        onSuccess: () => {
            router.push({
                pathname: '/Find/Complete',
            });
        }
    });
    
    return { mutate };
};
