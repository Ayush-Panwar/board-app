"use-client";
import React from "react";

import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

type Props = {
  params: {
    boardId: string;
  };
};

export default function BoardIdPage({ params }: Props) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
}
