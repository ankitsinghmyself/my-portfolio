"use client";
import { GoWorkflow } from "react-icons/go";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { MdHome, MdWorkOutline } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { GrProjects } from "react-icons/gr";

export const SidebarList = [
  { label: "Home", href: "/", icon: MdHome, type: "internal" },
  {
    label: "Projects",
    href: "/projects",
    icon: GrProjects,
    type: "internal",
  },
  {
    label: "Experience",
    href: "/experience",
    icon: MdWorkOutline,
    type: "internal",
  },
  {
    label: "GitHub",
    href: "https://github.com/ankitsinghmyself",
    icon: VscGithub,
    type: "external",
  },
  // {
  //   label: "Stack overflow",
  //   href: "https://stackoverflow.com/users/11166949/ankit-singh",
  //   icon: FaStackOverflow,
  //   type: "external",
  // },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankitsinghmyself/",
    icon: SiLinkedin,
    type: "external",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing",
    icon: GoWorkflow,
    type: "external",
  },
  {
    label: "About Me",
    href: "/about",
    icon: LiaUserGraduateSolid,
    type: "internal",
  },
];
