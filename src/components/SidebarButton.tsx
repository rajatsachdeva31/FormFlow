import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SidebarButton = ({ formElement }: { formElement: FormElement }) => {
  const { label, icon: Icon } = formElement.designerButtonElement;
  const draggable = useDraggable({
    id: `designer-button-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerButton: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant={"outline"}
      className={cn(
        "flex flex-col gap-2 cursor-grab h-32",
        draggable.isDragging && "ring-2 ring-primary opacity-75"
      )}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon size={20} className="text-primary" />
      <span className="text-sm">{label}</span>
    </Button>
  );
};

export const SidebarButtonDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon: Icon } = formElement.designerButtonElement;
  return (
    <Button
      variant={"outline"}
      className="flex flex-col gap-2 cursor-grab w-full h-32"
    >
      <Icon size={20} className="text-primary" />
      <span className="text-sm">{label}</span>
    </Button>
  );
};

export default SidebarButton;
