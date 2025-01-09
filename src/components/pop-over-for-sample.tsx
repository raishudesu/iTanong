"use client";

import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverForm,
  PopoverLabel,
  PopoverTextarea,
  PopoverFooter,
  PopoverCloseButton,
  PopoverSubmitButton,
} from "@/components/ui/popover";

export default function PopoverFormForSample() {
  return (
    <PopoverRoot>
      <PopoverTrigger variant="default">Answer</PopoverTrigger>
      <PopoverContent className="h-[200px] w-[364px]">
        <PopoverForm onSubmit={(note) => console.log("Note submitted:", note)}>
          <PopoverLabel>Answer</PopoverLabel>
          <PopoverTextarea />
          <PopoverFooter>
            <PopoverCloseButton />
            <PopoverSubmitButton>Submit</PopoverSubmitButton>
          </PopoverFooter>
        </PopoverForm>
      </PopoverContent>
    </PopoverRoot>
  );
}
