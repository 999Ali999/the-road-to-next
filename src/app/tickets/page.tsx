import { Suspense } from "react";

import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex-1  flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      {/* <ErrorBoundary fallback={<Placeholder label="Something went wrong!" />}> */}
      <div className="w-full flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default TicketsPage;
