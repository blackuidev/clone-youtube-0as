import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Compass, Tv, Users, Library, History, Video, Clock, ThumbsUp, Settings, Flag, HelpCircle, MessageSquare
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 bg-background transition-transform duration-300 ease-in-out\n                      ${isOpen ? 'translate-x-0' : '-translate-x-full'}\n                      md:translate-x-0 md:static md:w-64 md:flex-shrink-0 md:border-r md:border-gray-200 dark:border-gray-800\n                      p-4 pt-20 md:pt-4 overflow-y-auto h-full`}
    >
      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Compass className="h-5 w-5" />
          <span>Explore</span>
        </NavLink>
        <NavLink
          to="/shorts"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Tv className="h-5 w-5" />
          <span>Shorts</span>
        </NavLink>
        <NavLink
          to="/subscriptions"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Users className="h-5 w-5" />
          <span>Subscriptions</span>
        </NavLink>

        <Separator className="my-4" />

        <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">You</h3>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Library className="h-5 w-5" />
          <span>Library</span>
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <History className="h-5 w-5" />
          <span>History</span>
        </NavLink>
        <NavLink
          to="/your-videos"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Video className="h-5 w-5" />
          <span>Your videos</span>
        </NavLink>
        <NavLink
          to="/watch-later"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Clock className="h-5 w-5" />
          <span>Watch later</span>
        </NavLink>
        <NavLink
          to="/liked-videos"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <ThumbsUp className="h-5 w-5" />
          <span>Liked videos</span>
        </NavLink>

        <Separator className="my-4" />

        <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">More from YouTube</h3>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/report-history"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <Flag className="h-5 w-5" />
          <span>Report history</span>
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <HelpCircle className="h-5 w-5" />
          <span>Help</span>
        </NavLink>
        <NavLink
          to="/send-feedback"
          className={({ isActive }) =>
            `flex items-center gap-4 py-2 px-3 rounded-lg text-sm font-medium transition-colors\n            ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-accent hover:text-accent-foreground'}`
          }
        >
          <MessageSquare className="h-5 w-5" />
          <span>Send feedback</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
