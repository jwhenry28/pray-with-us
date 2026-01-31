import type { Saint } from "@/types/saint";

type SaintCardProps = {
  saint: Saint;
};

const SaintCard = ({ saint }: SaintCardProps) => {
  const dynamicStyles = { backgroundColor: saint.color };
  return (
    <div
      key={saint.id}
      style={dynamicStyles}
      className="flex flex-col justify-between items-center rounded-md p-8 w-64 h-96"
    >
      <img
        src={saint.image}
        className="max-w-48 max-h-64 object-contain"
      />
      <p className="">{saint.name}</p>
    </div>
  );
};

export default SaintCard;
