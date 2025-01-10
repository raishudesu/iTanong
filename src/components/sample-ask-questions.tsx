import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SampleAvatar from "./sample-avatar";
import AskPopoverSample from "./ask-popover-sample";

const SampleAskQuestion = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex gap-2 items-center">
            <SampleAvatar />
            <CardTitle>John Doe</CardTitle>
          </div>
          <CardDescription>Ask anything about me.</CardDescription>
        </CardHeader>
        <CardContent>
          <AskPopoverSample />
        </CardContent>
        <CardFooter className="flex justify-center"></CardFooter>
      </Card>
    </div>
  );
};

export default SampleAskQuestion;
