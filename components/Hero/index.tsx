import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  AspectRatio,
} from "@chakra-ui/react";

const Hero = () => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.600");
  return (
    <>
      <Stack
        maxW={"full"}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 15 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={mode}
        >
          Check out my YouTube Channel
        </Heading>
        <AspectRatio ratio={16 / 9} my={10}>
          <iframe
            src="https://www.youtube.com/embed/cpTWPL3FTWY"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Stack>
    </>
  );
};

export default Hero;
