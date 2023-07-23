import { makeAutoObservable } from "mobx";
import EventListQuery from "./query/eventQuery";

type TInitiator = {
  email: string;
  events: string[];
  id: number;
  isAdmin: boolean;
  name: string;
  surname: string;
  password: string;
};

export interface IEvent {
  coins: number;
  create_date: string;
  description: string | null;
  eventType: string;
  id: number;
  initiator: TInitiator;
  isActive: boolean;
  isRepeatable: boolean;
  name: string;
  participants: object[];
  start_date: string;
}

class eventStore {
  eventList: IEvent[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setData(data: IEvent[]) {
    this.eventList = data;
  }

  getData() {
    return this.eventList;
  }

  fetchData = () => {
    EventListQuery.getEventList();
  };
}

export default new eventStore();
