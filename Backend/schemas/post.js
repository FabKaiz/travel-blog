export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "postedAt",
      type: "geopoint",
      title: "Location",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // {
      // name: "author",
      // type: "reference",
      // title: "Author",
      // to: { type: 'author' },
    // },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
};
