import React from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaPlusSquare } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { LuSunMedium } from "react-icons/lu";

import { Link } from "react-router-dom";
import { useProductStore } from "../products/product.js";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { products } = useProductStore();
  return (
    <>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            bgGradient={"linear(to-l, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            <Link to={"/"}>Product Store </Link>
          </Text>

          <HStack>
            <Link to={"/create"}>
              <Button>
                <FaPlusSquare fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode == "light" ? (
                <IoMoonSharp size={20} />
              ) : (
                <LuSunMedium size={20} />
              )}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
