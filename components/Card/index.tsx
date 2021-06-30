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
import { BlogAuthor } from "./BlogAuthor";

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

const BlogCard = (props) => {
  const bgMode = useColorModeValue("solarizedLight.400", "solarizedDark.600");
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");

  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      rounded={12}
      boxShadow="2xl"
      paddingBottom={{ base: "1", sm: "5" }}
      bg={bgMode}
      w="100%"
      h={{ base: "flex", lg: "30rem" }}
    >
      {/* blog post image box */}
      <Box display="flex" flex="1" position="relative" alignItems="center">
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <LinkBox>
            <LinkOverlay href={props.link}>
              <Image
                borderRadius="lg"
                src={props.img}
                alt="some good alt text"
                objectFit="contain"
              />
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Box>
      {/* blog info box */}
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        alignContent={{ base: "center", md: "left" }}
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
        <LinkBox>
          <LinkOverlay href={props.link} color={mode}>
            <Heading
              marginTop="1"
              textAlign={{ base: "center", md: "left" }}
              size="2xl"
            >
              {props.title}
            </Heading>
          </LinkOverlay>
        </LinkBox>
        <Text
          as="p"
          my="2"
          color={mode}
          fontSize={["md", "lg", "xl", "2xl"]}
          textAlign={{ base: "center", md: "left" }}
        >
          {props.description}
        </Text>
        <Flex
          alignContent="flex-end"
          justifyContent={{ base: "center", md: "left" }}
        >
          <BlogAuthor name={props.author} date={new Date()} />
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogCard;
