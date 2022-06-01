import { VStack } from "@chakra-ui/react";
import "./styles/style.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import background from "../src/assets/img/halo.png";

function App() {
  return (
    <VStack w={"100vw"} h={"100vh"} bgImage={background} bgSize={"cover"}>
      <Header />
      <ProductList />
    </VStack>
  );
}

export default App;
