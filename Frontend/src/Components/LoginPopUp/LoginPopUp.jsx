import { RxCross2 } from "react-icons/rx";

const LoginPopUp = ({ setSignInPopUp }) => {
  return (
    <div
  className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999]"
  onClick={() => setSignInPopUp(false)}
>
  <div
    className="relative bg-white p-5 rounded-lg shadow-xl max-w-2xl w-full 
               opacity-0 animate-[zoomIn_0.25s_ease-out_forwards]"
    onClick={(e) => e.stopPropagation()}
  >
    <button
      className="absolute right-3 top-3 cursor-pointer"
      onClick={() => setSignInPopUp(false)}
    >
      <RxCross2 size={25} />
    </button>

    <h1 className="text-2xl font-semibold mb-4">SIGN IN</h1>
  </div>
</div>
  );
};

export default LoginPopUp;
