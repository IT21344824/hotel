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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const MealPlan = ({ form }) => {
    return (
        <div className="mt-10 w-full rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2 className="mb-4">Meal Plan</h2>

            {/* Meal Plan Field */}
            <FormField
                control={form.control}
                name="Meal_Plan"
                render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                        <FormLabel className="w-[150px] text-left">Meal Plan :</FormLabel>
                        <FormControl className="flex-1">
                            <Select value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select an Plan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Plans</SelectLabel>
                                        <SelectItem value="Buffet">Buffet</SelectItem>
                                        <SelectItem value="Set Menu">Set Menu</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Add more fields for Task Timeline as needed */}
        </div>
    );
};

export default MealPlan;
