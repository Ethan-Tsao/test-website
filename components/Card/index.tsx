import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import bookJson from "components/Pages/Blog/Books/blogs.json";

// refactor notes
// object with blog image, blog title, blog description, tags, author, and date
/*
[
  {
    "title": "some title",
    "description": "some short description",
    "text": "some text",
    "author": "author",
    "img": "image path",
    "tags": [tag1, tag2, tag3]
  }
]
// */
// interface IBlogTags {
//   tags: string[];
//   marginTop?: SpaceProps["marginTop"];
// }

// const BlogTags: React.FC<IBlogTags> = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium" color={mode}>
        {props.name}
      </Text>
      <Text color={mode}>—</Text>
      <Text color={mode}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogCard = (props) => {
  const bgMode = useColorModeValue("solarizedLight.400", "solarizedDark.600");
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");

  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      rounded={12}
      boxShadow="2xl"
      paddingBottom={{ base: "1", sm: "5" }}
      bg={bgMode}
      w="65rem"
      h="30rem"
    >
      {/* blog post image box */}
      <Box display="flex" flex="1" position="relative" alignItems="center">
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Image
              borderRadius="lg"
              src={props.img}
              alt="some good alt text"
              objectFit="contain"
            />
          </Link>
        </Box>
      </Box>
      {/* blog info box */}
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        // justifyContent="center"
        marginTop={10}
        marginRight={3}
      >
        {/* <HStack spacing={2}>
          {props.tags.map((tag) => {
            return (
              <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
                {tag}
              </Tag>
            );
          })}
        </HStack> */}
        <Heading marginTop="1" textAlign="left" size="2xl">
          <LinkBox>
            <LinkOverlay href={props.link}>{props.title}</LinkOverlay>
          </LinkBox>
        </Heading>
        <Text as="p" my="2" color={mode} fontSize="2xl" textAlign="left">
          {props.description}
        </Text>
        <Flex alignContent="flex-end">
          <BlogAuthor name={props.author} date={new Date()} />
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogCard;
