import { apiSlice } from "../apiSlice";

export const newsService = apiSlice.injectEndpoints({
  
  endpoints: (builder) => ({
    getAllNews: builder.query({
      query: () => "/news/getNewses",
    }),

    // getUserById: builder.query({
    //   query: (usrId) => `/user-management/managed-userDetails/${usrId}`,
    //   providesTags: ['User']
    // }),

    // getUserRole: builder.query({
    //   query: () => "/secBr-management/managed-secBr",
    // }),

    // updateUser: builder.mutation({
    //   query: (userDetails) => ({
    //     url: "/customer-management/managed-customers",
    //     method: "PUT",
    //     body: userDetails,
    //   }),
    //   invalidatesTags: ["User"],
    // }),
    // deleteUser: builder.mutation({
    //   query: (usrId) => ({
    //     url: `/user-management/managed-user/${usrId}?LastModifiedBy=1`,
    //     method: "POST",
    //   }),
    // }),
    // createUserWithBr: builder.mutation({
    //   query: (user) => ({
    //     url: `/user-management/managed-userss`,
    //     method: "POST",
    //     body: user,
    //   }),
    // }),
    // adminupdateUser: builder.mutation({
    //   query: (finalOb) => ({
    //     url: '/user-management/managed-userDetails',
    //     method: 'PUT',
    //     body: finalOb
    //   }),
    //   invalidatesTags: ['User']
    // }),
  }),
});

export const {
  useGetAllNews,

} = newsService;


