import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useCounter } from "../../hooks/useCounter";

type Props = {};

const Counter = (props: Props) => {
  const { count, increment } = useCounter();
  const toast = useToast();

  return (
    <Box pos="relative">
      <Flex justify="center" align="center" w="100%" h="100vh" gap={4}>
        <Text>Current count {count} </Text>
        <Button
          onClick={() => {
            increment();
            toast({
              position: "top-right",
              duration: 5000,
              containerStyle: {
                width: "300px",
              },
              render: () => <TostContainer count={count} />,
            });
          }}
          sx={{
            background: "#ebecef",
            color: "black",
            padding: "0.5rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          +1
        </Button>
      </Flex>
    </Box>
  );
};

export default Counter;

type TostContainerProps = {
  count: number;
};

const TostContainer = ({ count }: TostContainerProps) => {
  return (
    <Box
      style={{
        position: "relative",
        borderRadius: "8px",
        padding: "1px",
        background:
          "linear-gradient(white, white) padding-box, radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%) border-box",
        border: "2px solid transparent",
        backgroundClip: "padding-box, border-box",
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        color="white"
        p={3}
        bg="red"
        borderRadius="6px"
        backgroundImage="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116,200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        background="#46474F"
        boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50,0.06)"
      >
        <Flex gap={2} align="center">
          <img src="/check-icon.svg" alt="check icon" />
          <Flex direction="column">
            <Text
              fontWeight={500}
              fontSize={14}
              lineHeight="16px"
              color="#ffffff"
            >
              Incremented
            </Text>
            <Text
              fontWeight={500}
              fontSize={14}
              lineHeight="16px"
              color="#ffffff"
            >
              {/* State updates in React are asynchronous hence the +1. There are other workarounds as well. */}
              Counter is now {count + 1}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
