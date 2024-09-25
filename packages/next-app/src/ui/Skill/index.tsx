"use client";

import { FC } from "react";
// import { useBuilderContext } from "@/context/BuilderContext";

interface ISkillProps {
   name: string;
}


export const Skill: FC<ISkillProps> = ({ name }) => {
   return <div>{name}</div>
};