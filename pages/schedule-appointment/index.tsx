import React, { useEffect } from "react";
import BaseLayout from "../../components/common/BaseLayout";
import FormSchedule from "../../components/sections/FormSchedule";
import getScheduleTime from "../../services/fetch/getScheduleTime";
import axios from "axios";
import { GetServerSideProps } from "next";

export default function ScheduleAppointment(props: any) {
  // console.log(props, "props");
  useEffect(() => {
    getScheduleTime()
  },[])

  return (
    <BaseLayout pageTitle="Agendar consulta" showBanner>
      <FormSchedule />
    </BaseLayout>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log("oi");

  // return {
  //   props: { oi: "oi" },
  // };
  // try {
  // const { data } = await axios.get("http://localhost:3000/api/scheduling/date");

  // console.log(data, 'data')

  // return {
  //   props: {
  //     data
  //   },
  // };
  //  console.log('dewee')

  // return {
  //   props: {
  //     teste: 'boraa'
  //   }
  // }
// };
