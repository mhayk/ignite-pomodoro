import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Inform the task"),
    minutesAmount: zod
        .number()
        .min(5)
        .max(60, "The cycle needs to be maximum 60 minutes"),
});

// interface NewCycleFormData {
//   task: string;
//   minutesAmount: number;
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });
    return (
        <FormContainer>
            <label htmlFor="task">I am going to work in</label>
            <TaskInput
                id="task"
                list="task-suggestions"
                placeholder="Give a name for your project"
                disabled={!!activeCycle}
                {...register("task")}
            />

            <datalist id="task-suggestions">
                <option value="Project 1" />
                <option value="Project 2" />
                <option value="Project 3" />
                <option value="Banana" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register("minutesAmount", { valueAsNumber: true })}
            />

            <span>minutes.</span>
        </FormContainer>
    );
}
