import type { Saint } from "@/types/saint";
import { useNavigate } from "react-router-dom";

type SaintCardProps = {
  saint: Saint;
  clickable?: boolean;
};

const SaintCard = ({ saint, clickable = true }: SaintCardProps) => {
  const dynamicStyles = { backgroundColor: saint.color };
  const baseStyles =
    "flex flex-col justify-between items-center rounded-md p-8 w-64 h-96";
  const clickableStyles = " cursor-pointer hover:shadow-xl transition-shadow";
  const propsStyles = baseStyles + (clickable ? clickableStyles : "");
  const navigate = useNavigate();

  const onClick = () => {
    if (!clickable) return;
    navigate(`/saints/${saint.id}`);
  };

  return (
    <div style={dynamicStyles} className={propsStyles} onClick={onClick}>
      <img src={saint.image} className="max-w-48 max-h-64 object-contain" />
      <p className="">{saint.name}</p>
    </div>
  );
};

export default SaintCard;
