import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const TaskTimeline = ({ form }) => {
    return (
        <div className="mt-10 w-full rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2 className="mb-4">Task Timeline</h2>

            {/* Example Field (replace with your actual fields) */}
            <FormField
                control={form.control}
                name="Task_description"
                render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                        <FormLabel className="w-[150px] text-left">Task Description :</FormLabel>
                        <FormControl className="flex-1">
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Add more fields for Task Timeline as needed */}
        </div>
    );
};

export default TaskTimeline;
