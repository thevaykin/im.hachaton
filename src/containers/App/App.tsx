import { Global } from "@emotion/react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { GLOBAL_STYLES} from "./app.style";
import { observer } from "mobx-react-lite";
import Events from "../Events/Events";

const App: FC = () => {
  return (
    <div>
      <Global styles={GLOBAL_STYLES} />
      <div>
        <BrowserRouter>
          <div>
          <Events />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default observer(App);
