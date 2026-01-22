"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Calendar,
} from "crm-project-ui";
import { useState } from "react";
import { TableDemo } from "./teste";
import { LoginForm } from "./teste-2";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="max-w-3xl mx-auto m-12">
        <LoginForm />
      </div>
      <div className="p-4 max-w-2xl mx-auto border flex items-center justify-center border-neutral-200 bg-neutral-100 rounded-sm my-12">
        <TableDemo />
      </div>
    </div>
  );
}
