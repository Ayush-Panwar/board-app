import { useOthersConnectionIds } from "@/liveblocks.config";
import * as React from "react";
import { Cursor } from "./cursors";

export interface CursorPresenceProps {}

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

export function CursorsPresence(props: CursorPresenceProps) {
  return (
    <>
      <Cursors />
    </>
  );
}

CursorsPresence.displayName = "CursoersPresence";
