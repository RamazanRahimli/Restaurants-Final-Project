import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: JSON.stringify(data), // Veriyi JSON formatına çevirin
                headers: {
                    'Content-Type': 'application/json' // İçerik türü başlığını doğru ayarlayın
                }
            })
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: `${USERS_URL}/all`,
                method: 'POST'
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
    }),
});

export const { useGetAllUsersQuery, useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } = userApiSlice;
