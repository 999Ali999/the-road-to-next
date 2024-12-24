import { notFound } from "next/navigation";

import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[420px] w-full animate-fade-in-from-top">
        <TicketItem ticket={ticket} isDetail={true} />
      </div>
    </div>
  );
};

export default TicketPage;
