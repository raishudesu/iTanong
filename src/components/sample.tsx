import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PopoverFormForSample from "./pop-over-for-sample";
import AnonAvatar from "./anon-avatar";

const Sample = () => {
  const sampleDate = new Date().toString();

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex gap-2 items-center">
            <AnonAvatar />
            <CardTitle>Anonymous Bunny</CardTitle>
          </div>
          <CardDescription>{sampleDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            What do you want people to ask you?
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <PopoverFormForSample />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Sample;
