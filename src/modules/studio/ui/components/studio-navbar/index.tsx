import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const StudioNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 Ibg-white flex items-center px-2 pr-5 z-50 to-zinc-600 border-b shadow-md">
            <div className="flex items-center gap-4 w-full">
                {/* Menu and Logo */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href="/studio">
                        <div className="p-3 flex items-center gap-1">
                            <Image src="/logo.webp" width={52} height={52} alt="Logo" />
                            <p className="text-xl font-semibold tracking-tight">Manage Your Videos</p>
                        </div>
                    </Link>
                </div>

                <div className="flex-1"></div>
                <div className="flex-shrink-0 items-center flex gap-4">
                    <AuthButton/>
                </div>

            </div>
        </nav>
    );
};
