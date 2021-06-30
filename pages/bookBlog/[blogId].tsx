import {
  Text,
  Flex,
  Heading,
  Box,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";
import { BlogAuthor } from "components/Card/BlogAuthor";

const BlogPage = ({ title, description, text, author, img, slug, tags }) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  const paragraphs = text;
  return (
    <>
      <Box maxW="65%" mx="auto" px={{ base: "6", lg: "8" }}>
        <Navbar />
        <Flex margin={4} flexDirection="column" px={{ base: "6", lg: "8" }}>
          <Heading as="h1" size="2xl" py={5} textAlign="center" color={mode}>
            {title}
          </Heading>
          <Flex>
            <Heading as="h1" size="md" color={mode}>
              <BlogAuthor name={author} date={new Date()} />
            </Heading>
          </Flex>
          <Image w="100%" src={img} my={8} />
          {paragraphs.map((paragraph) => {
            return (
              <Flex>
                <Text fontSize="2xl" color={mode} py="1rem">
                  {paragraph}
                </Text>
                <br />
                <br />
              </Flex>
            );
          })}
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
