import React, { FC, useState } from "react";
import Flex from "./Flex";
import { Avatar } from "@withlanda/humphrey";
import Text from "./Text";
import ArrowBlueDown from "@/assets/navigation/ArrowBlueDown";
import SettingsIcon from "@/assets/navigation/SettingsIcon";
import LogoutIcon from "@/assets/navigation/Logout";
import useSessionStorage from "@/hooks/useSessionStorage";
import { IUserDetails } from "@/interface/auth";
import { TOKEN } from "@/utils/token";
import { logOutUserReq } from "@/helpers/api/useAuth";

interface IPopupMenu {
  isCollapse: boolean;
}
const PopupMenu: FC<Partial<IPopupMenu>> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails] = useSessionStorage<IUserDetails>(TOKEN.USER);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // logout

  const handleLogout = () => {
    logOutUserReq();
  };
  return (
    <>
      <div className="relative w-full">
        {/* Trigger button */}
        <Flex
          onClick={toggleMenu}
          className={`cursor-pointer space-x-2 ${
            props.isCollapse ? "items-center" : ""
          }`}
        >
          <Avatar
            name={`${userDetails?.firstName} ${userDetails?.lastName}`}
            className="min-w-[40px] min-h-[40px]"
          />
          {props.isCollapse && <ArrowBlueDown />}
          {!props.isCollapse && (
            <Flex className="flex-col">
              <Flex className="items-center space-x-2">
                <Text className="text-mixed_m6 font-bold">
                  {`${userDetails?.firstName || ""} ${
                    userDetails?.lastName || ""
                  }`}
                </Text>
                <ArrowBlueDown />
              </Flex>
              <Text className="text-[11px] mt-2 text-mixed_m4">
                {userDetails?.email || ""}
              </Text>
            </Flex>
          )}
        </Flex>

        {/* Popup menu */}
        {isOpen && (
          <Flex className="absolute z-10 space-y-1 -top-24 -right-20 flex-col -mt-2 py-3 w-48 bg-white rounded-md shadow-lg">
            {/* Menu items */}

            <a
              href="/account/settings"
              className=" flex items-center px-4 py-3 text-mixed_m7 space-x-4 "
              onClick={closeMenu}
            >
              <SettingsIcon />
              <p> Settings</p>
            </a>

            {/* div detail */}
            <div className="w-full h-[1px] bg-mixed_m1" />
            <div
              onClick={handleLogout}
              className="flex px-4  cursor-pointer py-3 items-center space-x-4 text-sec_red_l1"
            >
              <LogoutIcon />
              <p>Logout </p>
            </div>
          </Flex>
        )}
      </div>
    </>
  );
};

export default PopupMenu;
