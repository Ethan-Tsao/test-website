import { Text, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BlogPage = ({ slug, title, text, lol }) => {
  return (
    <Flex margin={4}>
      <Heading as="h1" size="lg">
        text is {`"${text}"`}
        title is {`"${title}"`}
        slug is {`"${slug}"`}
      </Heading>
    </Flex>
  );
};

export const getStaticPaths = async () => {
  const blogs = (await import("components/Pages/Blog/Books/blogs.json"))
    .default;

  // List all the routes that need to be pre-rendered based on [slug].tsx
  const paths = blogs.map((blog) => ({ params: { blogId: blog.slug } }));

  /*
    paths: [
      {
        params: {
          slug: ad-dolores-itaque
        }
      },
      {
        params: {
          slug: perspiciatis-voluptas-fugiat
        }
      },
      {
        params: {
          slug: et-rem-facere
        }
      },
    ]
  */

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log("PARAMS => ", params);

  // Get the path to pre-render
  const { blogId } = params;

  // Retrieve information for the page based on the path
  const blogs = (await import("components/Pages/Blog/Books/blogs.json"))
    .default;
  const blog = blogs.find((blog) => blog.slug === blogId);
  const { slug, title, text } = blog;
  // Return page info as props to the page
  return {
    props: { slug, title, text, lol: "HA" },
    revalidate: true,
  };
};

export default BlogPage;
