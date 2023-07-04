import React from "react";
import Image from "next/image";
interface MovieProps {
  id: number;
  src: string;
}

const Movie: React.FC<MovieProps> = ({ id, src }) => {
  return (
    <div
      key={id}
      style={{
        margin: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image src={src} alt={""} width={300} height={500} />
    </div>
  );
};

export default Movie;
