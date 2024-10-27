import { Form } from "@prisma/client";
import React from "react";
import PreviewButton from "./PreviewButton";
import SaveButton from "./SaveButton";
import PublishButton from "./PublishButton";
import Designer from "./Designer";

const FormBuilder = ({ form }: { form: Form }) => {
  return (
    <main className="h-full w-full flex flex-col">
      <nav className="flex justify-between items-center border-b-2 p-4">
        <h2 className="truncate font-semibold">
          <span className="font-medium text-muted-foreground mr-2">Form:</span>
          {form.title}
        </h2>
        <div className="flex items-center gap-2">
          <PreviewButton />
          {!form.published && (
            <>
              <SaveButton />
              <PublishButton />
            </>
          )}
        </div>
      </nav>
      <div className="bg-accent bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')] flex flex-1 justify-center items-center overflow-y-auto">
        <Designer />
      </div>
    </main>
  );
};

export default FormBuilder;
