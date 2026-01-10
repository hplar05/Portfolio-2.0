import React from "react";
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SuggestionInput from "./SuggestionInput";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const FloatingButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="fixed bottom-4 right-7">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold p-4 rounded-full shadow-lg">
            <LocalPhoneIcon />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-md">
        <div className="flex items-center justify-center">
          <SuggestionInput />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
