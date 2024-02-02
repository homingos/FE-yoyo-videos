import React from "react";
import HomeClient from "./page-client";
import { getTemplates } from "@/lib/api/http";
import { notFound } from "next/navigation";

export default async function Page() {
  const templates = await getTemplates();

  if(templates.length === 0 || !templates) {
    notFound();
  }
  
  return (
    <HomeClient templates={templates} />
  );
}
