import { useUser } from "@/context/user-context";

export default function Profile() {
  const { user } = useUser();
  return <h1>Hello {user.full_name}</h1>;
}
