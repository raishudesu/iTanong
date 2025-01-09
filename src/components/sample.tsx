import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PopoverFormForSample from "./pop-over-for-sample";

const Sample = () => {
  const sampleDate = new Date().toString();
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Anonymous</CardTitle>
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
