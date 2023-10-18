import React, { useEffect } from "react";
import BaseLayout from "../../components/common/BaseLayout";
import FormSchedule from "../../components/sections/FormSchedule";
import getScheduleTime from "../../services/fetch/getScheduleTime";
import axios from "axios";

export default function ScheduleAppointment() {
  // console.log(data, 'data')

  useEffect(() => {
    try {
      // Faça uma chamada ao servidor usando o Axios
      const response = axios.get('http://localhost:3000/api/scheduling/date');
  
      // Extraia os dados da resposta
      // const data = response.data;
  
      // Retorne os dados como props para a página
      // return {
      //   props: { data },
      // };
    } catch (error) {
      console.error('Erro na solicitação ao servidor:', error);
      return {
        props: { data: [] },
      };
    }
  }, [])

  return (
    <BaseLayout pageTitle="Agendar consulta" showBanner>
      <FormSchedule />
    </BaseLayout>
  );
}

// Defina a função getServerSideProps
// export async function getServerSideProps(context) {
//   try {
//     // Faça uma chamada ao servidor usando o Axios
//     const response = await axios.post('http://localhost:3000/scheduling/time');

//     // Extraia os dados da resposta
//     const data = response.data;

//     // Retorne os dados como props para a página
//     return {
//       props: { data },
//     };
//   } catch (error) {
//     console.error('Erro na solicitação ao servidor:', error);
//     return {
//       props: { data: [] },
//     };
//   }
// }
