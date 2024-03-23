import ChatBotIcon from "@/assets/svg/ChatBotIcon";
import CloseIcon from "@/assets/svg/CloseIcon";

interface IProps {
  setActive: Function;
}

const ChatHeader = ({ setActive }: IProps) => {
  return (
    <div className="flex bg-white items-center justify-between">
      <div className="flex justify-start items-center pl-5">
        <ChatBotIcon />
        <p className="py-5 px-2">ปรึกษากับ AI</p>
      </div>

      <div
        onClick={() => setActive(false)}
        style={{ background: "#D9D9D9", width: "28px", height: "28px" }}
        className="rounded-full justify-center items-center grid cursor-pointer mx-5"
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
