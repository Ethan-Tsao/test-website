import { Text, Flex, Heading, Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";

const BlogPage = ({ title, description, text, author, img, slug, tags }) => {
  return (
    <>
      <Box maxW="65%" mx="auto" px={{ base: "6", lg: "8" }}>
        <Navbar />
        <Flex margin={4} flexDirection="column">
          <Heading as="h1" size="lg" py={5} textAlign="center">
            title is {`"${title}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            desc is {`"${description}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            text is {`"${text}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            author is {`"${author}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            image is {`"${img}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            slug is {`"${slug}"`}
          </Heading>
          <Heading as="h1" size="lg" py={5}>
            tags are {`"${tags}"`}
          </Heading>
        </Flex>
      </Box>
    </>
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
  // Get the path to pre-render
  const { blogId } = params;

  // Retrieve information for the page based on the path
  const blogs = (await import("components/Pages/Blog/Books/blogs.json"))
    .default;
  const blog = blogs.find((blog) => blog.slug === blogId);

  // Destructure the returned item (optional)
  const { title, description, text, author, img, slug, tags } = blog;

  // Return page info as props to the page
  return {
    props: { title, description, text, author, img, slug, tags },
  };
};

export default BlogPage;
