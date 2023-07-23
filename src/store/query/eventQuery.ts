import eventStore from "../event.store";


export default class EventListQuery {
  static getEventList() {
    fetch('http://192.168.89.115:8180/im_events/getAllEvents', {method: "GET"})
      .then(response => response.json()).then(data => { 
        eventStore.eventList = data});
  }
}