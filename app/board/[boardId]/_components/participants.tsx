"use client";
import { useOthers, useSelf } from "@/liveblocks.config";
import React from "react";
import UserAvatar from "./user-avatar";
import { connectionIdtoColor } from "@/lib/utils";

type Props = {};

const MAX_SHOWN_USERS = 2;

export default function Participants({}: Props) {
  const users = useOthers();
  const currentUser = useSelf();
  users.map((user) => {
    return user;
  });

  const hasMoreUsers = users.length > MAX_SHOWN_USERS;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.length > 0 &&
          users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
            return (
              <UserAvatar
                key={connectionId}
                borderColor={connectionIdtoColor(connectionId)}
                src={info?.picture}
                name={info?.name}
                fallback={info?.name?.[0] || "T"}
              />
            );
          })}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            borderColor={connectionIdtoColor(currentUser.connectionId)}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
}

export const ParticipantsSkeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
