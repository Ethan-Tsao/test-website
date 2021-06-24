import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { DarkModeToggle } from "components/DarkModeToggle";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box py={3}>
      <Flex
        // bg={useColorModeValue("solarizedLight.600", "solarizedDark.600")}
        // color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LinkBox>
            <LinkOverlay href="/">
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                // color={useColorModeValue("gray.800", "white")}
                fontSize="3xl"
                fontWeight="semibold"
              >
                Ethan Tsao
              </Text>
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          justifyContent="flex-end"
        >
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          ml="2"
        >
          <DarkModeToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue(
    "solarizedDark.600",
    "solarizedLight.400"
  );
  const linkHoverColor = useColorModeValue(
    "solarizedLight.800",
    "solarizedDark.400"
  );
  const popoverContentBgColor = useColorModeValue(
    "solarizedLight.600",
    "solarizedDark.600"
  );

  return (
    <Stack direction={"row"} spacing={4} mr="4">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                boxShadow={"2xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      // _hover={{
      //   bg: useColorModeValue("solarizedDark.500", "solarizedLight.600"),
      // }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            // _groupHover={{
            //   color: useColorModeValue(
            //     "solarizedLight.600",
            //     "solarizedDark.500"
            //   ),
            // }}
            fontWeight={500}
            align={"left"}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            // _groupHover={{
            //   color: useColorModeValue(
            //     "solarizedLight.600",
            //     "solarizedDark.500"
            //   ),
            // }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon
            // color={useColorModeValue("solarizedLight.600", "solarizedDark.500")}
            w={5}
            h={5}
            as={ChevronRightIcon}
          />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      // bg={useColorModeValue("solarizedLight.600", "solarizedDark.600")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          // color={useColorModeValue("solarizedDark.600", "solarizedLight.500")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            // color={useColorModeValue("solarizedDark.600", "solarizedLight.500")}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          // borderColor={useColorModeValue(
          //   "solarizedDark.600",
          //   "solarizedLight.500"
          // )}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                // color={useColorModeValue(
                //   "solarizedDark.600",
                //   "solarizedLight.500"
                // )}
                fontWeight="semibold"
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Portfolio",
    // children: [
    //   {
    //     label: "Explore Design Work",
    //     subLabel: "Trending Design to inspire you",
    //     href: "#",
    //   },
    //   {
    //     label: "New & Noteworthy",
    //     subLabel: "Up-and-coming Designers",
    //     href: "#",
    //   },
    // ],
  },
  // {
  //   label: "Mechanical Keyboards",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    label: "Personal Blog",
    children: [
      {
        label: "Mechanical Keyboards",
        href: "#",
      },
      {
        label: "Programming",
        href: "#",
      },
      {
        label: "Video Games",
        href: "#",
      },
      {
        label: "Books",
        href: "/bookBlog",
      },
    ],
  },
  // {
  //   label: "Programming",
  //   href: "#",
  // },
  {
    label: "About Me",
    href: "#",
  },
];
