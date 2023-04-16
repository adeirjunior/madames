import { useEffect, useState } from "react";
import styled from 'styled-components';
import { DivProp } from "./StyledComponents";

interface progressLine {
    label: string,
  backgroundColor: string,
  visualParts: [
    {
      percentage: string,
      color: string
    }
  ]
}

const Style = styled(DivProp)`
    .progressVisualFull {
        display: flex;
        height: 6px;
        margin: 20px 0;
    }
  
    .progressVisualPart {
        transition: width 10s ease;
    }
  
    .progressLabel {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  
`

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}: progressLine) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item: any) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <Style>
      <div className="progressLabel">{label}</div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </Style>
  );
};

const Toast = styled(DivProp)`
position: fixed;
top: 45%;
animation-duration: 9.25s;
animation-name: fadein;
opacity: 0;
animation-timing-function: ease-in-out;
animation-delay: .75s;
animation-fill-mode: forwards;
animation-direction: normal;
min-width: 240px;
width: 240px;
max-width: 240px;
z-index: 99999999;
border: #E4E4E4 2px solid;
left: 50%;
user-select: none;
transform: translate(-50%, -50%);
background-color: white;
padding: 1em 2em;
border-radius: 4em;
transition: border-color .3s;
    &:hover {
        border-color: rgb(236, 71, 142);
    }
    p {
        margin-bottom: .5em;
        text-align: center;
    }

@keyframes fadein {
    0% { opacity: 0; } 
    10% { opacity: 1; top: 50%; }
    90% { opacity: 1; top: 50%; }
    100% { opacity: 0; top: 45%; }

}
`

interface popup {
    message: string,
    duration?: number
}
const Popup = ({ message, duration = 2 }: popup) => {

const [showPopup, setShowPopup] = useState<boolean>(true);

useEffect(() => {
    setTimeout(() => setShowPopup(false), duration*1000);
}, [duration])

return showPopup && process.env.NODE_ENV === "production" && <Toast><ProgressLine label=""
backgroundColor="lightblue"
visualParts={[
  {
    percentage: "100%",
    color: "rgb(236, 71, 142)"
  }
]}/><p>{message}</p></Toast> || null;
};

export default Popup;