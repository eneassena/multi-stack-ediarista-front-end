import { UserShortInformationInterface } from "data/@types/UseInterface";
import { useState, useMemo } from "react";
import { ValidationService } from "data/services/ValidationService";
import { APIService } from "data/services/APIService";

export default function useVerificarProfissionais() {
  const [cep, setCep] = useState(""),
    [error, setError] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInformationInterface[]),
    [diaristasRestante, setDiaristasRestante] = useState(0),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setError("");
    try {
      const { data } = await APIService.get<{
        diaristas: UserShortInformationInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas/localidades?cep=${cep.replace(/\D/g, "")}`);

      setBuscaFeita(true);
      setDiaristas(data.diaristas);
      setDiaristasRestante(data.quantidade_diaristas);
      setCarregando(false);
    } catch (error) {
      setError("CEP não encontrado");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestante,
  };
} // end function
