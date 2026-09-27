import type { Metadata } from "next";
import { PlatformCapabilityPage } from "@/app/components/platform-capability-page";
import { getPlatformCapability } from "@/app/platform-data";
const capability=getPlatformCapability("intelligence")!;
export const metadata:Metadata={title:"Intelligence AI Platform — FIMMICK",description:capability.intro,alternates:{canonical:"https://www.fimmick.com/en/platform/intelligence"},openGraph:{title:capability.title,description:capability.intro,images:[]},twitter:{title:capability.title,description:capability.intro,images:[]}};
export default function Page(){return <PlatformCapabilityPage capability={capability}/>;}
