import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket(params.ticketId);

  if (!ticket) {
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

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[580px] w-full animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail={true} />
      </div>
    </div>
  );
};

export default TicketPage;
