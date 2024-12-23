import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketEditPath, ticketPath } from "@/paths";

import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    // <Button variant="outline" size="icon" asChild>
    <Link
      prefetch
      href={ticketPath(ticket.id)}
      className={buttonVariants({ variant: "outline", size: "icon" })}
      aria-label={`Go to ticket ${ticket.id}`} // this is for accessibility and gave me 100% with it and 95% without it in lighthouse
    >
      <LucideSquareArrowOutUpRight className="h-4 w-4" />
    </Link>
    // </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link
        prefetch
        href={ticketEditPath(ticket.id)}
        aria-label={`Edit ticket ${ticket.id}`}
      >
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button
        variant="outline"
        size="icon"
        aria-label={`Delete ticket ${ticket.id}`}
      >
        <LucideTrash className="h-4 w-4" />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full max-w-[420px] pt-20">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
              null: isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-2 px-3">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
