"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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

const categories = [
  "Beach",
  "Adventure",
  "Cultural",
  "City",
  "Nature",
  "Cruise",
];

const initialForm = {
  name: "",
  country: "",
  category: "Beach",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

export default function AddDestinationPage() {
  const [form, setForm] = useState(initialForm);

  const update = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/add-destination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("The destination could not be added. Please try again.");
      }

      toast.success("Destination added successfully!");
      setForm(initialForm);
    } catch (error) {
      console.error("Failed to add destination:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "The destination could not be added. Please try again.",
      );
    }
  };

  return (
    <>
      <main className="flex-1 bg-white px-5 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-171">
          <div className="mb-10">
            <h1 className="font-heading text-3xl font-normal tracking-[-0.06em] text-neutral-950 sm:text-[30px]">
              Add New Travel Package
            </h1>
          </div>

          <Card className="mx-auto max-w-107.5 rounded-sm border border-neutral-200 bg-white py-0 shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
            <CardContent className="px-5 py-5 sm:px-5.25 sm:py-5.25">
              <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <Label
                  htmlFor="destination-name"
                  className="text-[10px] font-medium text-neutral-950"
                >
                  Destination Name
                </Label>
                <Input
                  id="destination-name"
                  name="name"
                  value={form.name}
                  onChange={(event) => update("name", event.currentTarget.value)}
                  placeholder="Bali Paradise"
                  required
                  className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="country"
                    className="text-[10px] font-medium text-neutral-950"
                  >
                    Country
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={(event) =>
                      update("country", event.currentTarget.value)
                    }
                    placeholder="Indonesia"
                    required
                    className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="category"
                    className="text-[10px] font-medium text-neutral-950"
                  >
                    Category
                  </Label>
                  <Select
                    value={form.category}
                    onValueChange={(value) => {
                      if (value) update("category", value);
                    }}
                  >
                    <SelectTrigger
                      id="category"
                      className="h-6.75 w-full rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="price"
                    className="text-[10px] font-medium text-neutral-950"
                  >
                    Price (USD)
                  </Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={(event) =>
                      update("price", event.currentTarget.value)
                    }
                    min="0"
                    step="0.01"
                    placeholder="e.g., 1299"
                    required
                    className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                  />
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="duration"
                    className="text-[10px] font-medium text-neutral-950"
                  >
                    Duration
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={form.duration}
                    onChange={(event) =>
                      update("duration", event.currentTarget.value)
                    }
                    placeholder="e.g., 7 Days/6 Nights"
                    required
                    className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="departure-date"
                  className="text-[10px] font-medium text-neutral-950"
                >
                  Departure Date
                </Label>
                <Input
                  id="departure-date"
                  name="departureDate"
                  type="date"
                  value={form.departureDate}
                  onChange={(event) =>
                    update("departureDate", event.currentTarget.value)
                  }
                  required
                  className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] text-neutral-500 shadow-none focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="image-url"
                  className="text-[10px] font-medium text-neutral-950"
                >
                  Image URL
                </Label>
                <Input
                  id="image-url"
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={(event) =>
                    update("imageUrl", event.currentTarget.value)
                  }
                  placeholder="https://example.com/image.jpg"
                  required
                  className="h-6.75 rounded-none border-0 bg-[#f5f7f9] px-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="description"
                  className="text-[10px] font-medium text-neutral-950"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={(event) =>
                    update("description", event.currentTarget.value)
                  }
                  placeholder="Describe the travel experience..."
                  required
                  className="min-h-20.25 resize-y rounded-none border-0 bg-[#f5f7f9] px-2 py-2 text-[10px] shadow-none placeholder:text-neutral-500 focus-visible:ring-1 focus-visible:ring-[#14a6c1]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  render={<Link href="/admin" />}
                  nativeButton={false}
                  variant="outline"
                  className="h-7.75 rounded-none border-red-300 px-3 text-[10px] font-normal text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 className="size-3" />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-7.75 rounded-none bg-[#13a5bf] px-3 text-[10px] font-normal text-white hover:bg-[#108da4]"
                >
                  <Plus className="size-3" />
                  Add Travel Package
                </Button>
              </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </>
  );
}
