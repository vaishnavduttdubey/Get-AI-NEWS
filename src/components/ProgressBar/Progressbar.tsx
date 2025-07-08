import { FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./ProgressBar.css"

interface ProgressbarProps {
  problemLength: number;
}
const Progressbar: FC<ProgressbarProps> = ({
  problemLength,
}: ProgressbarProps) => {
  const percentage = Math.floor((problemLength / 30) * 100);
    console.log(problemLength)
  return (
    <>
      <div style={{ width: 120, height: 150 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%  completed`}/>
      </div>
    </>
  );
};

export default Progressbar;
