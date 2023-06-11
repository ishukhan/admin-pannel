import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenu</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Total Sale made today</p>
        <p className="amount">₹5060</p>
        <p className="desc">
          Previous transaction processing. Last payment not may include
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative ">
              <KeyboardArrowDown fontSize="small" />
              <div className="itemAmount">₹1520</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="itemAmount">₹8000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="itemAmount">₹85000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
