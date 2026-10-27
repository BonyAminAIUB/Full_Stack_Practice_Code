import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const UserCard = ({ user }) => {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardAction>
          <h2>No Action</h2>
        </CardAction>

        <CardTitle>{user.name}</CardTitle>

        <CardDescription>
          Email: {user.email}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href={`/users/${user._id}`}>
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
