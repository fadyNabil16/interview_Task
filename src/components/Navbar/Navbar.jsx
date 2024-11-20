import React from "react";
import "./index.css";
import "../../locale/en.json";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//{t('')}
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="_container">
      <div className="flex text-bgc-bred text-xl">{t("bosta")}</div>

      <div className="">
        <ul className="flex">
          <li className="px-12">{t("main")}</li>
          <li className="px-12">{t("prices")}</li>
          <li className="px-12">{t("support")}</li>
        </ul>
      </div>

      <div>
        <ul className="flex">
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <li className="px-5">
                <button>{t("trackpackage")}</button>
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Hello</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <li className="px-5">{t("login")}</li>
          <li className="text-bgc-bred px-5">{t("lang")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
