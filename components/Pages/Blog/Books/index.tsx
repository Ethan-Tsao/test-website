import NextLink from "next/link";
import { Link, Flex, Box, Heading } from "@chakra-ui/react";
import { NextPage, GetStaticProps } from "next";
import bookJson from "./blogs.json";

const BookBlogComponent = () => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">Table of Contents</Heading>
        {bookJson.map((x) => {
          return (
            <NextLink
              href={`/bookBlog/${x.slug}`}
              passHref
              key={`/bookBlog/${x.slug}`}
            >
              <Link>
                <Heading as="h3" size="lg">
                  {x.title}
                </Heading>
              </Link>
            </NextLink>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BookBlogComponent;
