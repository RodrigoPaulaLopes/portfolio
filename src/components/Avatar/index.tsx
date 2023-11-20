import Imagem from "../../assets/rodrigo.png"

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="w-48 h-48 mask mask-hexagon bg-emerald-500">
        <img src={Imagem} />
      </div>
    </div>
  );
}
