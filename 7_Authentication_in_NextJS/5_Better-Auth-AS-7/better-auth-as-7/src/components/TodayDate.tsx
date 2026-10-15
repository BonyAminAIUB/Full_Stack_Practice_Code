"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getSnapshot = () =>
  new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const getServerSnapshot = () => "";

export default function TodayDate() {
  const today = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return <>{today}</>;
}