"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Save, Trash2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export type Destination = {
  _id: string;
  name: string;
  country: string;
  category?: string;
  price: string | number;
  duration: string;
  departureDate?: string;
  imageUrl: string;
  description?: string;
};

type DestinationForm = {
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
};

type EditDestinationDialogProps = {
  destination: Destination;
};

const categories = ["Beach", "Adventure", "Cultural", "City", "Nature", "Cruise"];

function getDestinationForm(destination: Destination): DestinationForm {
  return {
    name: destination.name,
    country: destination.country,
    category: destination.category || "Beach",
    price: String(destination.price),
    duration: destination.duration,
    departureDate: destination.departureDate
      ? destination.departureDate.slice(0, 10)
      : "",
    imageUrl: destination.imageUrl,
    description: destination.description || "",
  };
}

const fieldClassName =
  "h-7 rounded-none border-0 bg-[#f5f7f9] px-2 text-[11px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]";
const labelClassName = "text-[10px] font-medium text-neutral-950";

export default function EditDestinationDialog({
  destination,
}: EditDestinationDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(() => getDestinationForm(destination));

  function update(field: keyof DestinationForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen) {
      setForm(getDestinationForm(destination));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(
        `http://localhost:8000/destination/${encodeURIComponent(destination._id)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!response.ok) {
        throw new Error("Could not save destination changes. Please try again.");
      }

      toast.success("Destination updated successfully!");
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Failed to update destination:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not save destination changes. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger className="inline-flex h-7 items-center gap-1.5 border border-neutral-300 px-3 text-[10px] text-neutral-800 transition-colors hover:bg-neutral-50">
          <Pencil className="size-3" aria-hidden="true" />
          Edit
        </DialogTrigger>

        <DialogContent
          showCloseButton
          className="max-h-[90vh] max-w-106.5 overflow-y-auto rounded-none p-5"
        >
          <DialogHeader className="gap-1">
            <DialogTitle className="text-sm font-normal tracking-tight">
              Update Travel Package
            </DialogTitle>
            <DialogDescription className="text-[10px]">
              Make changes to the travel package details below
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="edit-destination-name" className="sr-only">
                Destination Name
              </Label>
              <Input
                id="edit-destination-name"
                name="name"
                value={form.name}
                onChange={(event) => update("name", event.currentTarget.value)}
                placeholder="Destination name"
                required
                className={fieldClassName}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="edit-country" className={labelClassName}>
                  Country
                </Label>
                <Input
                  id="edit-country"
                  name="country"
                  value={form.country}
                  onChange={(event) =>
                    update("country", event.currentTarget.value)
                  }
                  placeholder="Indonesia"
                  required
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="edit-category" className={labelClassName}>
                  Category
                </Label>
                <Select
                  value={form.category}
                  onValueChange={(value) => {
                    if (value) update("category", value);
                  }}
                >
                  <SelectTrigger
                    id="edit-category"
                    className={`${fieldClassName} w-full`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="edit-price" className={labelClassName}>
                  Price (USD)
                </Label>
                <Input
                  id="edit-price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.price}
                  onChange={(event) =>
                    update("price", event.currentTarget.value)
                  }
                  placeholder="e.g., 1299"
                  required
                  className={fieldClassName}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="edit-duration" className={labelClassName}>
                  Duration
                </Label>
                <Input
                  id="edit-duration"
                  name="duration"
                  value={form.duration}
                  onChange={(event) =>
                    update("duration", event.currentTarget.value)
                  }
                  placeholder="e.g., 7 Days/6 Nights"
                  required
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="edit-departure-date" className={labelClassName}>
                Departure Date
              </Label>
              <Input
                id="edit-departure-date"
                name="departureDate"
                type="date"
                value={form.departureDate}
                onChange={(event) =>
                  update("departureDate", event.currentTarget.value)
                }
                className={fieldClassName}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="edit-image-url" className={labelClassName}>
                Image URL
              </Label>
              <Input
                id="edit-image-url"
                name="imageUrl"
                type="url"
                value={form.imageUrl}
                onChange={(event) =>
                  update("imageUrl", event.currentTarget.value)
                }
                placeholder="https://example.com/image.jpg"
                required
                className={fieldClassName}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="edit-description" className={labelClassName}>
                Description
              </Label>
              <Textarea
                id="edit-description"
                name="description"
                value={form.description}
                onChange={(event) =>
                  update("description", event.currentTarget.value)
                }
                placeholder="Describe the travel experience..."
                className="min-h-20 resize-y rounded-none border-0 bg-[#f5f7f9] px-2 py-2 text-[11px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                disabled={saving}
                onClick={() => setOpen(false)}
                className="h-8 rounded-none border-red-300 px-3 text-[10px] font-normal text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <Trash2 className="size-3" />
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="h-8 rounded-none bg-[#13a5bf] px-3 text-[10px] font-normal text-white hover:bg-[#108da4]"
              >
                <Save className="size-3" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
}
