import React from "react";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import GitHubIcon from "@mui/icons-material/GitHub";

function navbar() {
  const { setTheme, themes } = useTheme();

  return (
    <>
      <div className="h-16 flex justify-center items-center  ">
        <div className="flex justify-between w-[90%] h-full">
          <div className="grid place-items-center">Brand</div>
          <div>
            <ul className="flex space-x-8 justify-center items-center h-full">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {themes.map((theme) => (
                      <DropdownMenuItem
                        key={theme}
                        onClick={() => {
                          setTheme(theme);
                        }}
                      >
                        {theme}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <a href="https://github.com/DolpratMIng" target="_blank">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar;
