"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { FlameIcon, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUp } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
const items = [
  { title: "History", url: "/playlists/history", icon: HistoryIcon ,auth:true},

  {
    title: "Liked Videos",
    url: "/playlists/liked",
    icon: ThumbsUp,
    auth: true,
  },
  {
    title: "All Playlists",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];

export const PersonalSection = () => {
  const clerk =useClerk();
  const {isSignedIn}=useAuth()
  return (
    <SidebarGroup>
        <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={(e)=>{
                  if(!isSignedIn && item.auth){
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                <Link href={item.url} className="flex items-center gap-4">
                    <item.icon className="mr-2" />
                    {item.title}
                </Link>

              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
