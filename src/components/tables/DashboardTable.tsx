import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const users = [
  {
    id: 0,
    name: "John Doe",
    joinedOn: "15/09/2024",
    verified: false,
  },
  {
    id: 1,
    name: "Jane Joe",
    joinedOn: "15/09/2024",
    verified: true,
  },
  {
    id: 2,
    name: "John Cena",
    joinedOn: "15/09/2024",
    verified: true,
  },
];

function DashboardTable() {
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
        {users.map((user) => (
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
