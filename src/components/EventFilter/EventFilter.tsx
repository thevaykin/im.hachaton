import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import {
  eventFilterWrapperStyle,
  filterButtonStyle,
} from "./EventFileter.style";

const Filter: FC = () => {
  return (
    <div css={eventFilterWrapperStyle}>
      <Button css={filterButtonStyle}>Спорт</Button>
      <Button css={filterButtonStyle}>Культура</Button>
      <Button css={filterButtonStyle}>Кино</Button>
      <Button css={filterButtonStyle}>Отдых</Button>
      <Button css={filterButtonStyle}>Развлечение</Button>
      <Button css={filterButtonStyle}>Обучение</Button>
    </div>
  );
};

export default observer(Filter);
