import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: ["books"],
    endpoints: (build) => ({
        getBook: build.query({
            query: (page = 1) => `/books?page=${page}`
        }),
        updatedBook: build.mutation({
            query: ({ bookId, data }) => ({
                url: `/edit-book/${bookId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: build.mutation({
            query: (bookId) => ({
                url: `/delete-book/${bookId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["books"],
        }),
        addNewBook: build.mutation({
            query: (body) => ({
                url: '/create-book',
                method: 'POST',
                body
            }), invalidatesTags: ["books"]
        }),
        getSingleBook: build.query({
            query: (bookId) => `/books/${bookId}`,
        }),

    })
})

export const { useGetBookQuery, useDeleteBookMutation, useAddNewBookMutation, useUpdatedBookMutation, useGetSingleBookQuery } = bookApi