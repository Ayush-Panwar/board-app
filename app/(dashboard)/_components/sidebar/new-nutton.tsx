import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import { Hint } from "../hint";

type Props = {};

export default function NewButton({}: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
          <Hint
            label="Create Organisation"
            side="right"
            align="center"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization
          routing="hash"
          skipInvitationScreen
          afterCreateOrganizationUrl="/"
        />
      </DialogContent>
    </Dialog>
  );
}
