import fav from "../assets/images/fav.png";

export default function Loader({ size = 50 }) {
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <div
        className="animate-spin"
        style={{ width: size, height: size }}
      >
        <img
          src={fav}
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
