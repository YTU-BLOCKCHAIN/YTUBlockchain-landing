import { notFound } from "next/navigation";
import NotFoundPage from "../not-found";

export default function CatchAll() {
  return <NotFoundPage />;
}
