import { IApp } from "@/types/apps.type";
import apps from "../../public/data.json";

export const getAllApps = async (): Promise<IApp[]> => apps;