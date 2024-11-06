import Accordion from "../Accordion/Accordion"
import AccordionItem from "../Accordion/AccordionItem"
const AccordionProps = [
  {
    active: false,
    part: 1,
    description: "Bit Manipulation",
    hours: "03:00:00",
    level: "medium",
    videos: [
      {
        videoNo: 1,
        videoDescription: "asdf",
        videohours: "10:00",
      },
      {
        videoNo: 2,
        videoDescription: "asdf",
        videohours: "10:00",
      },
      {
        videoNo: 3,
        videoDescription: "asdf",
        videohours: "10:00",
      },
    ],

  },
  {
    active: true,
    part: 1,
    description: "Bit Manipulation",
    hours: "03:00:00",
    level: "medium",
    videos: [
      {
        videoNo: 1,
        videoDescription: "asdf",
        videohours: "10:00",
      },
      {
        videoNo: 2,
        videoDescription: "asdf",
        videohours: "10:00",
      },
    ],

  },
  {
    active: true,
    part: 1,
    description: "Bit Manipulation",
    hours: "03:00:00",
    level: "medium",
    videos: [
      {
        videoNo: 1,
        videoDescription: "asdf",
        videohours: "10:00",
      },
      {
        videoNo: 2,
        videoDescription: "asdf",
        videohours: "10:00",
      },
    ],

  },
 
];


const Chapter5 = () => {
  return (
    <>
      {AccordionProps.map((value, index) => {
        return (
          <Accordion
            active={value.active}
            part={value.part}
            description={value.description}
            hours={value.hours}
            level={value.level}
            videos={value.videos.length}
            key={index}
          >
            {value.videos.map((value, index) => {
              return (
                <AccordionItem
                  key={index}
                  videoNo={value.videoNo}
                  videoDescription={value.videoDescription}
                  videohours={value.videohours}
                />
              );
            })}
          </Accordion>
        );
      })}
    </>
  )
}

export default Chapter5
