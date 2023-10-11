import { Box, FormLabel, Input, Button, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function App() {
  const [GP, setGP] = useState("");
  const [Tunjangan, setTunjangan] = useState("");
  const [KP, setKP] = useState("");
  const [hasil, setHasil] = useState<{ gk: string; gp: string; gb: string }>({
    gk: "",
    gp: "",
    gb: "",
  });

  const handleGP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGP(e.target.value);
  };
  const handleTunjangan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTunjangan(e.target.value);
  };
  const handleKP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKP(e.target.value);
  };
  const handleHasil = () => {
    const gk = String(Number(GP) + Number(Tunjangan));
    const gb = String(Number(GP) + Number(Tunjangan) - Number(KP));
    setHasil({ gk, gp: GP, gb });
  };

  return (
    <>
      <Box maxW="800px" m="0 auto" boxSizing="border-box" p="15px" border="2px solid black" mt="2rem" display="grid" gridTemplateAreas="'h h''l r'" gridTemplateColumns="1fr 1fr" gridTemplateRows="max-content max-content">
        <Heading gridArea="h" textAlign="center">
          Salary Calculator
        </Heading>
        <Box gridArea="l">
          <FormLabel>Gaji Pokok</FormLabel>
          <Input type="number" value={GP} onChange={handleGP} />
          <FormLabel>Tunjangan</FormLabel>
          <Input type="number" value={Tunjangan} onChange={handleTunjangan} />
          <FormLabel>Kewajiban Pokok</FormLabel>
          <Input type="number" value={KP} onChange={handleKP} />
          <Button mt="1rem" variant="unstyled" bg="teal" p="0 10px" onClick={handleHasil}>
            Calculate
          </Button>
        </Box>
        <Box boxSizing="border-box" p="15px" gridArea="r">
          <Heading size="md">Hasil:</Heading>
          <Text>Gaji Kotor: Rp. {hasil.gk} </Text>
          <Text>Gaji Pokok: Rp. {hasil.gp}</Text>
          <Text>Gaji Bersih: Rp. {hasil.gb}</Text>
        </Box>
      </Box>
    </>
  );
}
