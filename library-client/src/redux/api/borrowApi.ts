import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const borrowApi = createApi({
    reducerPath: 'borrowApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    tagTypes: ["borrow"],
    endpoints: (build) => ({
        getBorrowSummary: build.query({
            query: () => '/borrow-summary'
        }),
        addNewBorrow: build.mutation({
            query: ({ bookId, quantity, dueDate }) => ({
                url: `/borrow/${bookId}`,
                method: 'POST',
                body: { quantity, dueDate }
            }), invalidatesTags: ["borrow"]
        })

    })
})

export const { useGetBorrowSummaryQuery, useAddNewBorrowMutation } = borrowApi