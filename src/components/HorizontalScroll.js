import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import styled from 'styled-components';


const HorizontalScroll = ({
  hideArrows,
  hideSingleArrow,
  transition,
  onUpdate,
  onSelect,
  selected,
  translate,
  alignCenter,
  dragging,
  clickWhenDrag,
  wheel,
  list,
  MenuItem,
  className
}) => {


  const Menu = (list) =>
    list.map(el => {
      const { id, name, price, backgroundImage } = el;
      return <MenuItem 
                text={name} 
                price={price} 
                key={id}
                backgroundImage={backgroundImage}
              />;
    });

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
  let menu = Menu(list.slice(0, list.length), selected);

  return (
    <div className={className}>
      <ScrollMenu
        ref={el => (menu = el)}
        data={menu}
        // arrowLeft={ArrowLeft}
        // arrowRight={ArrowRight}
        hideArrows={hideArrows}
        hideSingleArrow={hideSingleArrow}
        transition={+transition}
        onUpdate={onUpdate}
        onSelect={onSelect}
        selected={selected}
        translate={translate}
        alignCenter={alignCenter}
        dragging={dragging}
        clickWhenDrag={clickWhenDrag}
        wheel={wheel}
      />
    </div>
  );
}; 

export default styled(HorizontalScroll)`
  .menu-item-wrapper {
    outline: 0;
  }
`
