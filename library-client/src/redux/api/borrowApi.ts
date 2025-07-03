import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const borrowApi = createApi({
    reducerPath: 'borrowApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["borrow"],
    endpoints: (build) => ({
        getBorrowSummary: build.query({
            query: () => '/borrow-summary'
        }),
        /* addNewBorrow: build.mutation({
            query: () => ({

            })

        }) */



    })
})

export const { useGetBorrowSummaryQuery } = borrowApi