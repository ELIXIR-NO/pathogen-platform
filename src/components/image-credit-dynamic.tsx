"use client";
import dynamic from "next/dynamic";

const ImageCredit = dynamic(() => import("./image-credit"), { ssr: false });

export default ImageCredit;
