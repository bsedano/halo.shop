import { Heading, HStack, Img, Text } from "@chakra-ui/react";
import Cart from "../../components/Cart";
import head from "../../assets/img/head.png";
import halotheme from "../../assets/music/halotheme.mp3";

const Header = () => {
  const haloTheme = new Audio(halotheme);

  return (
    <HStack
      as={"header"}
      w={"100vw"}
      h={"100px"}
      bgColor={"whiteAlpha.900"}
      p={12}
      justify={"space-between"}
      boxShadow={"0px 0px 10px black"}
      fontFamily={"Orbitron"}
    >
      <HStack>
        <Img
          src={head}
          h={["50px", "50px", "90px"]}
          transition={"transform 0.7s ease-in-out"}
          _hover={{
            cursor: "pointer",
            transform: "rotate(360deg)",
          }}
          onClick={() => haloTheme.play()}
        />
        <Heading fontFamily={"Orbitron"} fontSize={["2xl", "4xl"]}>
          Halo
          <Text as={"span"} color="#aa7f1f">
            .
          </Text>
          Shop
        </Heading>
      </HStack>
      <Cart />
    </HStack>
  );
};

export default Header;
