import { Box, Button } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import BookBlogPage from "components/Pages/Blog/Books";
import { NextPage, GetStaticProps } from "next";

type Blog = {
  slug: string;
  title: string;
  text: string;
};

interface BookBlogProps {
  blogs: Blog[];
}

const BookBlog: NextPage<BookBlogProps> = () => {
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
      align="center"
    >
      <Navbar />
      <BookBlogPage />
    </Box>
  );
};

export default BookBlog;
