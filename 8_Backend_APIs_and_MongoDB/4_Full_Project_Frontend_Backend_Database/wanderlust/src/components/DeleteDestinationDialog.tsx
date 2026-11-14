"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TriangleAlert, Trash2, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type DeleteDestinationDialogProps = {
  destinationId: string;
  destinationName: string;
};

export default function DeleteDestinationDialog({
  destinationId,
  destinationName,
}: DeleteDestinationDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);

    try {
      const response = await fetch(
        `http://localhost:8000/destination/${encodeURIComponent(destinationId)}`,
        { method: "DELETE" },
      );

      if (!response.ok) {
        throw new Error("Could not delete the travel package. Please try again.");
      }

      toast.success("Travel package deleted successfully!");
      setOpen(false);
      router.push("/destinations");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete destination:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not delete the travel package. Please try again.",
      );
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger className="inline-flex h-7 items-center gap-1.5 border border-red-300 px-3 text-[10px] text-red-600 transition-colors hover:bg-red-50">
          <Trash2 className="size-3" aria-hidden="true" />
          Delete
        </AlertDialogTrigger>

        <AlertDialogContent className="max-w-81.5 gap-3 rounded-sm p-5">
          <AlertDialogCancel
            aria-label="Close confirmation"
            className="absolute top-2 right-2 size-6 border-0 bg-transparent p-0 text-neutral-400 shadow-none hover:bg-transparent hover:text-neutral-700"
          >
            <X className="size-3.5" />
          </AlertDialogCancel>

          <AlertDialogHeader className="grid grid-cols-[32px_1fr] grid-rows-[auto_auto] items-center gap-x-2 gap-y-1 text-left">
            <AlertDialogMedia className="col-start-1 row-span-2 mb-0 size-8 rounded-full bg-red-50 text-red-500 [&_svg]:size-4">
              <TriangleAlert aria-hidden="true" />
            </AlertDialogMedia>
            <AlertDialogTitle className="col-start-2 row-start-1 text-xs font-medium">
              Delete Travel Package
            </AlertDialogTitle>
            <AlertDialogDescription className="col-start-1 col-span-2 row-start-2 text-[10px] leading-normal text-neutral-500">
              Are you sure you want to delete “
              <strong className="font-semibold text-neutral-800">
                {destinationName}
              </strong>
              ”? This action cannot be undone and will permanently remove this
              travel package from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex justify-end gap-2 pt-1">
            <AlertDialogCancel
              disabled={deleting}
              className="h-7 rounded-none border-neutral-200 px-3 text-[9px] font-normal"
            >
              Cancel
            </AlertDialogCancel>
            <Button
              type="button"
              disabled={deleting}
              onClick={handleDelete}
              className="h-7 rounded-none bg-red-500 px-3 text-[9px] font-normal text-white hover:bg-red-600"
            >
              <Trash2 className="size-3" />
              {deleting ? "Deleting..." : "Delete Package"}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
}
