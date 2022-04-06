import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Receita Total</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total de vendas hoje</p>
        <p className="amount">R$ 420</p>
        <p className="desc">
          Transações em progresso. Ultimo pagamento pode não estar incluso
        </p>
        <div className="sumary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative ">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmout">R$ 12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ultima Semana</div>
            <div className="itemResult positive ">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmout">R$ 12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ultimo Mês</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmout">R$ 12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
