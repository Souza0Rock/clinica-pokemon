import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { push, route } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (route === "/") {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  }, [route]);

  return (
    <S.Container>
      <S.Logo open={open} onClick={() => push("/")}>
        <Image
          src="/images/white-pokeball.svg"
          alt="Centro Pokémon"
          width={34}
          height={34}
        />
        <S.TextContent>
          <S.Text>Centro Pokémon</S.Text>
        </S.TextContent>
      </S.Logo>
      <S.BoxNavigation>
        <S.TextLink href="/quem-somos">Quem Somos</S.TextLink>
        <Button
          label="Agendar Consulta"
          onClick={() => push("/agendar-consulta")}
        />
      </S.BoxNavigation>
    </S.Container>
  );
};

export default Header;
