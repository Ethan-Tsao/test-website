import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import Head from "next/head";

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Box as="section" w="full">
        <Box
          maxW="80%"
          mx="auto"
          px={{ base: "6", lg: "8" }}
          py={{ base: "16", sm: "20" }}
          textAlign="center"
        >
          <Text
            fontWeight="semibold"
            color={useColorModeValue("blue.400", "blue.200")}
          >
            Continuous Integration and Deployment
          </Text>
          <Heading
            my="4"
            as="h2"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="1.2"
            color={useColorModeValue("solarizedDark.700", "white")}
          >
            Get your dev team working with{" "}
            <Box
              as="mark"
              bg="unset"
              color={useColorModeValue("blue.400", "blue.200")}
              whiteSpace="nowrap"
            >
              CI/CD
            </Box>
          </Heading>
          <Text
            fontSize="lg"
            maxW="xl"
            mx="auto"
            color={useColorModeValue("solarizedDark.700", "white")}
          >
            Develop, Test, and Deploy applications to Azure with speed.
          </Text>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt="10"
            justify="center"
            spacing={{ base: "3", md: "5" }}
            maxW="md"
            mx="auto"
          >
            <Button
              as="a"
              href="#"
              size="lg"
              h="16"
              px="10"
              // colorScheme="blue"
              bgColor="blue.400"
              color="white"
              fontWeight="bold"
              flex={{ md: "1" }}
            >
              Get started
            </Button>
            <Button
              as="a"
              flex={{ md: "1" }}
              variant="outline"
              href="#"
              size="lg"
              h="16"
              px="10"
              fontWeight="bold"
            >
              Talk to an expert
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
