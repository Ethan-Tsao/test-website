import NextLink from "next/link";
import { Link, Flex, Box, Heading } from "@chakra-ui/react";
import { NextPage, GetStaticProps } from "next";
import BlogCard from "components/Card";
import bookJson from "./blogs.json";

const BookBlogPage = () => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        {bookJson.map((x) => {
          return (
            <NextLink
              href={`/bookBlog/${x.slug}`}
              passHref
              key={`/bookBlog/${x.slug}`}
            >
              <BlogCard
                title={x.title}
                description={x.description}
                author={x.author}
                tags={x.tags}
                img={x.img}
                link={`/bookBlog/${x.slug}`}
              />
            </NextLink>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BookBlogPage;
