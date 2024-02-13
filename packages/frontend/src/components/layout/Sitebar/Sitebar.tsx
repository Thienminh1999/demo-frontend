import React from "react";
import { MenuItem, MenuList, SitebarContainer } from "./Sitebar.styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import ChangeLocale from "../ChangeLocale/ChangeLocale";
import { ColorDefaultEnum } from "@/config/colors.constant";
import i18n from "@/locales/core/i18n";

function Sitebar() {
  const pathName = usePathname();

  const DUMMY_MENU = [
    {
      href: "/",
      icon: faHouse,
      name: `${i18n.getText('common.dashboard')}`,
    },
    {
      href: "/table",
      icon: faTable,
      name: `${i18n.getText('common.portmanagement')}`,
    },
  ];

  return (
    <SitebarContainer className="bg-gray-50">
      <MenuList>
        <ChangeLocale />
        {DUMMY_MENU.map((menu, index) => {
          const isActive = pathName === menu.href;
          return (
            <MenuItem $isActive={isActive} key={index}>
              <Link href={menu.href}>
                <FontAwesomeIcon
                  color={ColorDefaultEnum.ONE_THEME_COLOR}
                  className='me-[1rem]'
                  icon={menu.icon}
                />
                {menu.name}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </SitebarContainer>
  );
}

export default Sitebar;
