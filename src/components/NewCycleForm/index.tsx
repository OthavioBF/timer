import { useContext } from "react";

import { CyclesContext } from "../../hooks/CyclesContext";
import { useForm, useFormContext } from "react-hook-form";
import { Form, TaskInput, MinutesInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);

  const { register } = useFormContext();

  return (
    <Form>
      <label htmlFor="task">Vou entrar em</label>
      <TaskInput
        id="task"
        placeholder="De um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <label htmlFor="minutesAmount">durante</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </Form>
  );
}
