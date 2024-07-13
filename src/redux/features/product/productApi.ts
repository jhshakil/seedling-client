import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        const params = new URLSearchParams();

        if (data.searchTerm) {
          params.append("searchTerm", data.searchTerm);
        }
        if (data.category) {
          params.append("category", data.category);
        }
        if (data.sort) {
          params.append("sort", data.sort);
        }

        return {
          url: "/product",
          method: "GET",
          params: params,
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
    getCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
} = productApi;
