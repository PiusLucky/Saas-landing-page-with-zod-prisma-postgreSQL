import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUsersListingResponse } from "@/types";

function DashboardTable({
  usersListing,
}: {
  usersListing: IUsersListingResponse | null;
}) {
  const users = usersListing?.response?.data?.map((user) => {
    return {
      id: user.id,
      name: user.full_name,
      joinedOn: user.created_at?.toString(),
      verified: user.is_verified,
    };
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Joined On</TableHead>
          <TableHead>Verified</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.joinedOn}</TableCell>
            <TableCell>
              {user.verified ? (
                <span className="text-[#369F3A]">Yes</span>
              ) : (
                <span className="text-[#EF0A0A]">No</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DashboardTable;
