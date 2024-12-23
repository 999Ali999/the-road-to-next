import { Ticket } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertForm = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertForm) => {
  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-4"
    >
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket?.content} />

      <Button type="submit">{ticket ? "Edit" : "Create"}</Button>
    </form>
  );
};

export { TicketUpsertForm };
