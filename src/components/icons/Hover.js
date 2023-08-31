import React from "react";

const HoverBadge = ({ children, label }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="block"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {isHovering && (
        <div className="absolute bg-yellow p-3 p text-black font-black font-thin rounded-md">
          {label}
        </div>
      )}
    </div>
  );
};
export default HoverBadge;
