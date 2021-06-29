import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { HomePage } from "components/Pages/Home";
import BookBlogPage from "components/Pages/Blog/Books";

export default function IndexPage() {
  return (
    <Box maxW="65%" mx="auto" px={{ base: "6", lg: "8" }} align="center">
      <Navbar />
    </Box>
  );
}
