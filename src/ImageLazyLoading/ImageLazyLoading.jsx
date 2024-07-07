import LazyLoadImage from "./LazyLoadImage";

export default function ImageLazyLoading() {
  const mapper = [
    "eEHLk~WB2yk8$Npyo0adR*=s.7kCMdnjx]S#M|%1%2ENSis.slNHW:",
    "eHF5?xYk^6#M9w@-5b,1J5O[@[or[k6.O[};FxngOZE3jMFxS#OtcX",
    "e6PZfSi_.AyE8^_3t7t7R*WB*0o#DgR4.T_3R*D%xt%MMcV@%itSI9",
    "eKN]Rv%2Tw=wR6]~RBVZRip0};RPxuwH%3tLOtxZ%gixI.ENa0NZIV",
  ];

  return (
    <div className="ImageLazyLoading">
      <div className="grid">
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <LazyLoadImage
              key={index}
              src={`https://picsum.photos/5000/3333?random=${index}`}
              hash={mapper[Math.floor(Math.random() * mapper.length)]}
            />
          ))}
      </div>
    </div>
  );
}
