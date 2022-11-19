import SideaBarButton from "../Buttons/SideBarButtons";
const Sidebar = () => {
  return (
    <>
      <div
        style={{
          width: "20%",
          background: "pink",
          height: "100%",
          padding: "5rem 1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <SideaBarButton>Мэдээ</SideaBarButton>
          <SideaBarButton>Зар Сурталчилгаа</SideaBarButton>
          <SideaBarButton>asd</SideaBarButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
