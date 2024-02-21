export function ConversionButtons({ setType, responsive }) {
  return (
    <div className={!responsive ? "types-header" : "types-header-responsive"}>
      <span
        onClick={(e) => {
          setType("sales");
        }}
      >
        sales
      </span>
      <span
        onClick={(e) => {
          setType("purchase");
        }}
      >
        purchase
      </span>
    </div>
  );
}
