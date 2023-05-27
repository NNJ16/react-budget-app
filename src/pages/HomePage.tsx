import { useContext } from "react";
import { SimpleGrid, Text } from "@mantine/core";
import PageContainer from "../layout/PageContainer";


const HomePage = () => {

  return (
    <PageContainer>
      <Text
        size={35}
        weight={700}
        mb={20}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[1]
              : theme.colors.gray[9],
        })}
      >
        YOUR BALANCE IS: LKR 0
      </Text>
      <SimpleGrid cols={2} style={{ justifyContent: "center" }}>

      </SimpleGrid>
    </PageContainer>
  );
};

export default HomePage;