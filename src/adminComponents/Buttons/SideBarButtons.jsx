const SideaBarButton = (props) => {
  return (
    <>
      <div
        style={{
          padding: "20px 12px",
          borderRadius: "20px",
          background: "aqua",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default SideaBarButton;
