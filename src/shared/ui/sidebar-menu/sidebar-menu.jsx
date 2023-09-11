import React from "react"
import { Typography } from "antd";

const { Link } = Typography;

export const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <Link href="https://google.com" target="_blank">
        Ссылка на Google
      </Link>
    </div>
  );
};
