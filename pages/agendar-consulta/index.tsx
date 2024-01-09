import React from "react";
import { GetServerSideProps } from "next";
import { IScheduleAppointment } from "./types";
import BaseLayout from "../../components/common/BaseLayout";
import FormSchedule from "../../components/sections/FormSchedule";
import getScheduleTime from "../../services/fetch/getScheduleTime";
import getScheduleDate from "../../services/fetch/getScheduleDate";
import getScheduleRegion from "../../services/fetch/getSchedulingRegion";

export default function ScheduleAppointment(props: IScheduleAppointment) {
  const { scheduleTime, scheduleDate, scheduleRegion } = props;

  return (
    <BaseLayout pageTitle="Agendar consulta" showBanner>
      <FormSchedule
        scheduleTime={scheduleTime}
        scheduleDate={scheduleDate}
        scheduleRegion={scheduleRegion}
      />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const scheduleTime = await getScheduleTime();
  const scheduleDate = await getScheduleDate();
  const scheduleRegion = await getScheduleRegion();

  return {
    props: {
      scheduleTime,
      scheduleDate,
      scheduleRegion,
    },
  };
};
