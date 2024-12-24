import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";

const TicketList = async () => {
  const ticket = await getTickets();

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[800px] flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {ticket.map((ticket) => (
          <div key={ticket.id} className="w-full flex justify-center">
            <TicketItem ticket={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TicketList };
