import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

export function SuggestionInput() {
  return (
    <div>
      <form className="grid w-full gap-4" action="post">
        <Label htmlFor="message-2 text-lg">Your suggestions</Label>
        <Textarea
          required
          placeholder="Type your suggestion here."
          id="message-2"
        />
        <p className="text-sm text-muted-foreground">
          Your suggestion will be copied to the creator.
        </p>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
