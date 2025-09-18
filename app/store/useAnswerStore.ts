//Her lagres svarene til brukeren
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Answer } from "../data/types";

type AnswersState = {
  answers: Answer[];
  setAnswer: (taskId: number, selectedOption: string) => void;
};

export const useAnswerStore = create<AnswersState>()(
  //Bruker persist fra zustand for å kunne lagre i localstorage
  //https://zustand.docs.pmnd.rs/integrations/persisting-store-data
  persist(
    (set) => ({
      answers: [],

      setAnswer: (taskId, selectedOption) => {
        set((state) => {
          const existingAnswer = state.answers.find(
            (answer) => answer.taskId === taskId
          );

          if (existingAnswer) {
            return {
              answers: state.answers.map((answer) =>
                answer.taskId === taskId
                  ? { ...answer, selectedOption }
                  : answer
              ),
            };
          }

          return {
            answers: [...state.answers, { taskId, selectedOption }],
          };
        });
      },
    }),
    {
      name: "user-answers",
    }
  )
);
