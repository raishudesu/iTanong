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

const AskPopoverSample = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger variant="default">Ask this Bunny</PopoverTrigger>
      <PopoverContent className="h-[200px] w-[364px]">
        <PopoverForm onSubmit={(note) => console.log("Note submitted:", note)}>
          <PopoverLabel>Ask this Bunny</PopoverLabel>
          <PopoverTextarea />
          <PopoverFooter>
            <PopoverCloseButton />
            <PopoverSubmitButton>Submit</PopoverSubmitButton>
          </PopoverFooter>
        </PopoverForm>
      </PopoverContent>
    </PopoverRoot>
  );
};

export default AskPopoverSample;
