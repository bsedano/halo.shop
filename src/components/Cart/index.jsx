import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Avatar,
  AvatarBadge,
  HStack,
  Icon,
  Text,
  Heading,
  Img,
  Center,
} from "@chakra-ui/react";
import chief from "../../assets/img/chief.gif";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct";
import React from "react";
import { clearCartThunk } from "../../store/modules/cart/thunks";
import { clearCart } from "../../store/modules/cart/action";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const produtos = useSelector((state) => state.cart);
  const total = produtos.reduce((a, b) => a + b.price, 0);
  const totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return (
    <>
      <HStack
        onClick={onOpen}
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
      >
        <Avatar
          bgColor={"transparent"}
          display={"flex"}
          justify={"flex-start"}
          align={"center"}
        >
          <AvatarBadge
            color={"#aa7f1f"}
            size="lg"
            border={"none"}
            marginBottom={["25px", "30px"]}
            textShadow={"0px 0px 2px black"}
          >
            {produtos.length > 0 && produtos.length}
          </AvatarBadge>
          <Icon as={AiOutlineShoppingCart} w={[7, 10]} h={[7, 10]} />
        </Avatar>
        <Text fontSize={"xl"} display={["none", "none", "block"]}>
          Carrinho
        </Text>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent bgColor={"whiteAlpha.900"}>
          <DrawerCloseButton _focus={{ border: "4px solid #465439" }} />
          <DrawerHeader fontFamily={"Orbitron"} h={"10%"}>
            <Text>Resumo do pedido</Text>
          </DrawerHeader>

          <DrawerBody display={"flex"} flexDir={"column"}>
            {produtos.length > 0 ? (
              produtos.map((produto, index) => (
                <CartProduct key={index} product={produto} />
              ))
            ) : (
              <Center w={"100%"} h={"100%"}>
                <Heading fontFamily={"Orbitron"} textAlign={"center"}>
                  Adicione alguns itens ao carrinho, Chief!
                </Heading>
                <Img
                  src={chief}
                  _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                />
              </Center>
            )}
          </DrawerBody>

          <DrawerFooter
            w={"100%"}
            display={"flex"}
            flexDir={"column"}
            bgColor={"blackAlpha.800"}
          >
            <HStack display={"flex"} justify={"space-around"} p={6} w={"100%"}>
              <Text
                color={"white"}
                fontFamily={"Orbitron"}
                fontSize={["sm", "xl"]}
                textAlign={"center"}
              >
                Quantidade: {produtos.length}
              </Text>
              <Text
                color={"white"}
                fontFamily={"Orbitron"}
                fontSize={["sm", "xl"]}
                textAlign={"center"}
              >
                Total: {totalFormatado}
              </Text>
            </HStack>
            <HStack display={"flex"} justify="space-around" w={"100%"}>
              <Button
                w={"50%"}
                bgColor={"#465439"}
                color={"white"}
                fontFamily={"Orbitron"}
                boxShadow={"0px 0px 5px black"}
                textShadow={"0px 0px 2px black"}
                height={"50px"}
                borderRadius={"0px"}
                onClick={() => dispatch(clearCartThunk(clearCart))}
                _hover={{ cursor: "pointer", filter: "brightness(0.5)" }}
              >
                Limpar carrinho
              </Button>
              <Button
                w={"50%"}
                color={"white"}
                bgColor={"#aa7f1f"}
                fontFamily={"Orbitron"}
                boxShadow={"0px 0px 5px black"}
                textShadow={"0px 0px 2px black"}
                height={"50px"}
                borderRadius={"0px"}
                _hover={{ cursor: "pointer", filter: "brightness(0.5)" }}
              >
                Finalizar pedido
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
