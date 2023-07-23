import { Form, Input, Layout, Select } from "antd";
import {
  BaseSyntheticEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import EventCard from "../../components/EventCard/EventCard";
import eventStore, { IEvent } from "../../store/event.store";
import { observer } from "mobx-react-lite";
import EventFilter from "../../components/EventFilter/EventFilter";
import { Button } from "antd";
import {
  addModalFieldStyle,
  addModalFooter,
  addModalLabelStyle,
  addModalStyle,
  addModalTitleStyle,
  containerModalStyle,
  containerStyle,
  contentStyle,
  eventListFooterButtonStyle,
  eventListFooterButtonWrapperStyle,
  eventListFooterStyle,
  headerStyle,
} from "./Events.style";

const EventList: FC = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const inputValues: { [index: string]: any } = {
    name: "",
    eventType: "",
    start_date: "",
    time: "",
    description: "",
  };

  const data = JSON.parse(JSON.stringify(eventStore.eventList));
  const categoryList: string[] = [
    "Спорт",
    "Культура",
    "Кино",
    "Отдых",
    "Развлечение",
    "Обучение",
  ];

  useEffect(() => {
    eventStore.fetchData();
  }, []);

  const handleShowModal = useCallback(() => {
    setShowAddModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowAddModal(false);
  }, []);

  const handleChange = useCallback((event: BaseSyntheticEvent) => {
    inputValues[event.target.name] = event.target.value;
  }, []);

  const handleSelect = useCallback((value: string) => {
    let category: string = ""
    if (value === "Спорт") {
      category = "SPORT"
    } else if (value === "Культура") {
      category = "CULTURE"
    } else if (value === "Кино") {
      category = "CINEMA"
    }else if (value === "Отдых") {
      category = "CHILL"
    }else if (value === "Развлечение") {
      category = "GAME"
    }else if (value === "Обучение") {
      category = "EDUCATION"
    }

    inputValues["eventType"] = category as string;
  }, []);

  const handleSubmit = useCallback(() => {
    const params = new URLSearchParams();
    for (let key in inputValues) {
      params.set(key as string, inputValues[key]);
    }
    params.set("initiator", "Дина");

    fetch("http://192.168.89.115:8180/im_events/addEvent", {
      method: "POST",
      body: params,
    }).then(() => {
      setShowAddModal(false);
      eventStore.fetchData();
    });
  }, []);

  return (
    <div css={containerStyle}>
      <Layout.Header css={headerStyle}>im.events</Layout.Header>
      <EventFilter />
      <Layout.Content css={contentStyle}>
        {showAddModal ? (
          <Form css={addModalStyle}>
            <div css={addModalTitleStyle}>Создание нового мероприятия</div>
            <Form.Item
              label={<span css={addModalLabelStyle}>Название</span>}
              css={containerModalStyle}
            >
              <Input
                name="name"
                css={addModalFieldStyle}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label={<span css={addModalLabelStyle}>Категория</span>}
              css={containerModalStyle}
            >
              <Select css={addModalFieldStyle} onSelect={handleSelect}>
                {categoryList.map((category) => (
                  <Select.Option key={category}>{category}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label={<span css={addModalLabelStyle}>Организатор</span>}
              css={containerModalStyle}
            >
              <Input name="initiator" css={addModalFieldStyle} />
            </Form.Item>
            <Form.Item
              label={<span css={addModalLabelStyle}>Дата начала</span>}
              css={containerModalStyle}
            >
              <Input
                name="start_date"
                css={addModalFieldStyle}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label={<span css={addModalLabelStyle}>Время</span>}
              css={containerModalStyle}
            >
              <Input
                name="time"
                css={addModalFieldStyle}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label={<span css={addModalLabelStyle}>Описание</span>}
              css={containerModalStyle}
            >
              <Input.TextArea
                name="description"
                css={addModalFieldStyle}
                onChange={handleChange}
              />
            </Form.Item>
            <div css={addModalFooter}>
              <Button
                css={eventListFooterButtonStyle}
                onClick={handleCloseModal}
              >
                Отмена
              </Button>
              <Button css={eventListFooterButtonStyle} onClick={handleSubmit}>
                Сохранить
              </Button>
            </div>
          </Form>
        ) : (
          data.map((event: IEvent) => (
            <EventCard
              key={event.id}
              eventDate={event.start_date}
              eventName={event.name}
              eventCoins={event.coins}
              category={event.eventType}
            />
          ))
        )}
      </Layout.Content>
      {!showAddModal ? (
        <Layout.Footer css={eventListFooterStyle}>
          <div css={eventListFooterButtonWrapperStyle}>
            <Button css={eventListFooterButtonStyle} onClick={handleShowModal}>
              Добавить
            </Button>
            <Button css={eventListFooterButtonStyle}>История</Button>
          </div>
        </Layout.Footer>
      ) : null}
    </div>
  );
};

export default observer(EventList);
