import { Suspense } from "react";

import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

// export const dynamic = "force-dynamic";  // this will turn the component into dynamic page

// export const revalidate = 30; // revalidate cache of the page every 30 seconds

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <CardCompact
        title="Create Ticket"
        description="A new ticket will be created"
        className="w-full max-w-[700px] self-center"
        content={<TicketUpsertForm />}
      />

      {/* <ErrorBoundary fallback={<Placeholder label="Something went wrong!" />}> */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[420px] flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
          <Suspense fallback={<Spinner />}>
            <TicketList />
          </Suspense>
        </div>
      </div>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
