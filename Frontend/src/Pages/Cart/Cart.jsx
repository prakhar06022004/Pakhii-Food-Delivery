import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl m-auto bg-amber-50 p-3 rounded-2xl mt-2">
      <FaArrowLeftLong size={20} onClick={() => navigate("/")} className="cursor-pointer"/>
      <div></div>
    </div>
  );
}

export default Cart;
