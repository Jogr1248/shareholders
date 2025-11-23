import { Button } from "~/components/ui/button";
import type { Route } from "../+types/root";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Riders Share Management System" },
    {
      name: "description",
      content: "Welcome to Riders Share Management System",
    },
  ];
}

export default function Home() {
  // this part is button
  return <Button>Hello Riders <br />
  <Link to="/sample">Sample</Link>
  </Button>;
}
