import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["books"],
    endpoints: (build) => ({
        getBook: build.query({
            query: () => '/books'
        }),
        updatedBook: build.mutation({
            query: ({ bookId, ...body }) => ({
                url: `/edit-book/${bookId}`,
                method: 'PUT',
                body
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

    })
})

export const { useGetBookQuery, useDeleteBookMutation, useAddNewBookMutation, useUpdatedBookMutation } = bookApi