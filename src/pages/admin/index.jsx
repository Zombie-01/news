import Sidebars from "../../adminComponents/SideBar";
import TextEditors from "../../adminComponents/RichTextEditors";

const Admin = (props) => {
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebars />
        <TextEditors />
      </div>
    </>
  );
};

export default Admin;
