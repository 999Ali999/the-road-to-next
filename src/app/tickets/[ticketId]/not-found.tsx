import Link from "next/link"; // Correct import

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      renderButton={(style) => (
        <Button asChild variant="outline" style={style}>
          <Link href={ticketsPath()}>Go back to Tickets</Link>
        </Button>
      )}
    />
  );
}
