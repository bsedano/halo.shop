import { Img, VStack, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeCartThunk } from "../../store/modules/cart/thunks";
const CartProduct = ({ product }) => {
  const { price, img, name } = product;
  const preco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  const dispatch = useDispatch();
  return (
    <VStack
      marginTop={4}
      fontFamily={"Orbitron"}
      p={4}
      bgColor={"blackAlpha.300"}
      boxShadow={"0px 0px 10px black"}
    >
      <Img
        src={img}
        w={"300px"}
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
      />
      <Text fontWeight={"bold"}>Nome: {name}</Text>
      <Text fontWeight={"bold"}>Preço: {preco}</Text>
      <Button
        w={"50%"}
        color={"white"}
        bgColor={"#465439"}
        _hover={{ cursor: "pointer", filter: "brightness(0.5)" }}
        borderRadius={"0px"}
        boxShadow={"0px 0px 5px black"}
        fontSize={["xs", "lg", "lg"]}
        onClick={() => dispatch(removeCartThunk(product))}
      >
        Remover produto
      </Button>
    </VStack>
  );
};

export default CartProduct;
