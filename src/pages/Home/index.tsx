import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I am going to work in</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play />
          Start
        </button>
      </form>
    </HomeContainer>
  );
}
