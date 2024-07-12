import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        return {
          url: `/product?${
            data?.searchTerm ? `searchTerm=${data.searchTerm}` : ""
          }`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getProduct: builder.query({
      query: (data) => ({
        url: `/product/${data._id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (data) => ({
        url: `/product/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
