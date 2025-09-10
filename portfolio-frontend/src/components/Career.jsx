import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MultimediaEditorIcon from "../assets/MultimediaEditor.svg";
import ItIntern from "../assets/internship.svg";
import LanguageEvaluator from "../assets/LanguageEvaluator.svg";

const Career = () => {
  return (
    <div className="bg-brandblue" id="career">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-brandwhite">
          PATH TO GROWTH
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(1, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2021 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={MultimediaEditorIcon}
                  alt="Multimedia Icon"
                  className="w-8 h-8"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold text-brandwhite text-xl">
              VOLUNTEER / FREELANCE MULTIMEDIA EDITOR
            </h3>
            <h4 className="vertical-timeline-element-subtitle pb-4">
              Member Church of God International
            </h4>
            <ul className="list-disc ml-5 space-y-2 text-brandwhite text-left">
              <li>
                Produced 100+ multimedia assets (reels, documentaries, AVPs),
                boosting online engagement for organizational campaigns by 25%.
              </li>
              <li>
                Delivered projects on tight deadlines, reducing revision cycles
                by 30% through clear collaboration and feedback integration.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="July 2024 -  September 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img src={ItIntern} alt="Internship" className="w-8 h-8" />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold text-brandwhite text-xl">
              INFORMATION TECHNOLOGY INTERN
            </h3>
            <h4 className="vertical-timeline-element-subtitle pb-4">
              Mater Dei Academy Tagaytay
            </h4>
            <ul className="list-disc ml-5 space-y-2 text-brandwhite text-left">
              <li>
                Troubleshot and resolved 50+ computer network and hardware
                issues, improving system uptime and lab productivity.
              </li>
              <li>
                Delivered projects on tight deadlines, reducing revision cycles
                by 30% through clear collaboration and feedback integration.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Martch 2021 -  January 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={LanguageEvaluator}
                  alt="Language Evaluator Icon"
                  className="w-7 h-7"
                />
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title font-bold text-brandwhite text-xl">
              LANGUAGE EVALUATOR
            </h3>
            <h4 className="vertical-timeline-element-subtitle pb-4">
              Gngn Eikawa Phils. Inc.
            </h4>
            <ul className="list-disc ml-5 space-y-2 text-brandwhite text-left">
              <li>
                Evaluated 500+ English learners, providing feedback on grammar,
                coherence, and pronunciation to support measurable language
                improvement.
              </li>
              <li>
                Ensured 100% compliance with standardized rubrics, maintaining
                fairness and consistency in learner scoring.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Career;
