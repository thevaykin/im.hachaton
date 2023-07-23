import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { FC, useMemo } from "react";
import { IEventCard } from "./EventCard.types";
import {
  eventCardBodyStyle,
  eventCardCoinStyle,
  eventCardDateStyle,
  eventCardImageStyle,
  eventCardStyle,
  eventCardUnderTextStyle,
} from "./EventCard.style";

const EventCard: FC<IEventCard> = (props) => {
  const { eventDate, eventName, eventCoins, category } = props;

  const date = eventDate.split(" ")[0].replaceAll("-", ".");

  const imageCard = useMemo(() => {
    let imgName: string = "";
    switch (category) {
      case 'SPORT':
        if (eventName === "Чемпионат по дартс") {
          imgName = "darts.png";
        } else if (eventName === "Велопрогулка") {
          imgName = "moto.png";
        } else if (eventName === "IM.CUP ЧГК: зимняя версия") {
          imgName = "CHGK.png";
        } else {
          imgName = "football.png";
        }
        break;
      case 'CHILL':
        imgName = "chill.png";
        break;
      case 'EDUCATION':
        imgName = "debats.png";
        break;
      case 'CULTURE':
        imgName = "music.png";
        break;
      case 'GAME':
        imgName = "hackathon.png";
        break;
      case 'CINEMA':
        imgName = "films.png";
        break;
      default:
        imgName = "football_default.jpg";
    }
    return <img src={`src/resources/${imgName}`} css={eventCardImageStyle} />;
  }, []);

  return (
    <div>
      <Card bodyStyle={eventCardBodyStyle} css={eventCardStyle}>
        <div css={eventCardDateStyle}>{date}</div>
        {imageCard}
        {eventCoins > 0 && (
          <img src="src/resources/coin.svg" css={eventCardCoinStyle} />
        )}
      </Card>
      <div css={eventCardUnderTextStyle}>{eventName}</div>
    </div>
  );
};

export default observer(EventCard);
