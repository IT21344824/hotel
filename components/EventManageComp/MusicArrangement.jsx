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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const MusicArrangement = ({ form }) => {
    return (
        <div className="mt-10 w-full rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2 className="mb-4">Music Arrangement</h2>

            {/* Music Arrangement */}

            <FormField
                control={form.control}
                name="Music"
                render={({ field }) => (
                    <FormItem className="flex items-center ">
                        <FormLabel className="w-[150px] text-left">Music :</FormLabel>
                        <FormControl className="flex-1">
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex text-center items-center justify-center"
                            >
                                <FormItem className="flex items-center space-x-3 justify-center">
                                    <FormControl>
                                        <RadioGroupItem value="Live Band" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Live Band</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 justify-center">
                                    <FormControl>
                                        <RadioGroupItem value="DJ" />
                                    </FormControl>
                                    <FormLabel className="font-normal">DJ</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* Add more fields for Task Timeline as needed */}
        </div>
    );
};

export default MusicArrangement;
