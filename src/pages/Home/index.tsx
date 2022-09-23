import { createContext, useContext, useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { Container } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { HandPalm, Play } from "phosphor-react";
import { NewCycleForm } from "../../components/NewCycleForm";
import { Countdown } from "../../components/Countdown";
import { CyclesContext } from "../../hooks/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5).max(60),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  function handleInterruptCycle() {
    interruptCycle();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button onClick={handleInterruptCycle} type="reset">
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button type="submit" disabled={!task}>
            <Play size={24} />
            Comecar
          </button>
        )}
      </form>
    </Container>
  );
}
