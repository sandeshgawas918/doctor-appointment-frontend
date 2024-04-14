import GlobalAPI from "@/app/utility/GlobalAPI";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { DeleteIcon } from "lucide-react";


const CancelAppointment = ({id,canceling}) => {

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className=" bg-primary text-white px-3 p-1 rounded-full text-[9px] sm:text-[12px] flex justify-center items-center hover:bg-red-600"> <DeleteIcon className=" px-1"/> Cancel Appointment</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{canceling(id)}} >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CancelAppointment;
