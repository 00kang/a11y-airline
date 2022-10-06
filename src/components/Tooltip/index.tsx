import { KeyboardEvent, useState } from "react";
import "./index.css";

const QuestionMarkTooltip = ({ description }: { description: string }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        if (e.nativeEvent.key === "Escape") {
          setShow(false);
        }
      }}
      style={{ position: "relative" }}
    >
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
        className="tooltip"
        aria-label="성인 승객 관련 정보"
      >
        ?
      </button>
      {show && (
        <div className="tooltip-description" aria-live="polite">
          {description}
        </div>
      )}
    </div>
  );
};
export default QuestionMarkTooltip;
