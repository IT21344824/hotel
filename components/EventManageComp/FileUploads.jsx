"use client";
import { useState } from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from "../ui/button";

const FileUploads = ({ form }) => {
    const [fileUrl, setFileUrl] = useState("");

    return (
        <div className="mt-10 w-full rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2 className="mb-4">File Uploads</h2>

            <FormField
                control={form.control}
                name="File_Uploads"
                render={({ field }) => (
                    <FormItem className="flex items-center gap-1 justify-center">
                        <FormLabel className="w-[150px] text-left">Uploads :</FormLabel>
                        <FormControl className="flex-1">
                            <div>
                                <CldUploadWidget
                                    uploadPreset="un-signed"
                                    onSuccess={(result) => {
                                        const uploadedUrl = result?.info?.secure_url;
                                        if (uploadedUrl) {
                                            setFileUrl(uploadedUrl);
                                            field.onChange(uploadedUrl); // Pass the URL to the form
                                        }
                                    }}
                                >
                                    {({ open }) => {
                                        return <Button onClick={() => open()}>Upload</Button>;
                                    }}
                                </CldUploadWidget>
                            </div>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default FileUploads;
