import { Img, VStack, Text, Button } from "@chakra-ui/react";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { description, price, img, name } = product;
  const preco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
  return (
    <VStack
      w={"90%"}
      h={"auto"}
      p={4}
      boxShadow={"0px 0px 10px black"}
      bgColor={"blackAlpha.300"}
    >
      <Img
        src={img}
        _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
        w={"400px"}
      />
      <Text fontFamily={"Orbitron"} fontWeight={"bold"}>
        Nome: {name}
      </Text>
      <Text textAlign={"center"} fontFamily={"Orbitron"} fontWeight={"bold"}>
        Descrição: {description}
      </Text>
      <Text fontFamily={"Orbitron"} fontWeight={"bold"}
       transition={"transform 0.7s ease-in-out"}
       _hover={{
         cursor: "pointer",
         transform: "rotate(360deg)",
       }}>
        Preço: {preco}
      </Text>
      <Button
        w={"90%"}
        bgColor={"#465439"}
        color={"white"}
        textShadow={"0px 0px 2px black"}
        fontSize={["xs", "lg", "xl"]}
        boxShadow={"0px 0px 5px black"}
        borderRadius={"0px"}
        fontFamily={"orbitron"}
        _hover={{
          cursor: "pointer",
          filter: "brightness(0.5)",
          transform: "scale(1.1)",
        }}
        onClick={() => dispatch(addCartThunk(product))}
      >
        Adicionar ao carrinho
      </Button>
    </VStack>
  );
};

export default Product;
