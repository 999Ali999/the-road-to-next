import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";

const TicketList = async () => {
  const ticket = await getTickets();

  return (
    <div className="w-full flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {ticket.map((ticket) => (
        <div
          key={ticket.id}
          className="w-full max-w-[420px] flex justify-center"
        >
          <TicketItem ticket={ticket} />
        </div>
      ))}
    </div>
  );
};

export { TicketList };
