"use client";
import BtnPrimary from "@/components/buttons/BtnPrimary";
import {toast} from "react-hot-toast";

export default function CopyToClipboardBtn({qsUrl}:any) {
    const copyToClipBoard = async () => {
        navigator.clipboard.writeText(qsUrl);
        toast.success("Copied to clipboard");
    }
    
    return (
        <BtnPrimary text="Click me" func={copyToClipBoard} />
    );
    }