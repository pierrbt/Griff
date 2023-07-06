import { Button, Flex } from "@mantine/core";
import { useModals } from "@mantine/modals";
import "../styles/style.scss";

function Index() {
  const modals = useModals();

  return (
    <Flex justify="center" align="center" sx={{ margin: "10px 0" }}>
      <Button
        variant="outline"
        size="lg"
        radius="xl"
        sx={{ margin: "10px 0" }}
        onClick={() => {
          modals.openModal({
            children: <div>Hello</div>,
            size: "md",
          });
        }}
      >
        Click me!
      </Button>
    </Flex>
  );
}

export default Index;
