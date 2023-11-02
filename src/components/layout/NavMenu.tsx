import { cn, fitUsername } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";
import { forwardRef, useMemo } from "react";
import { LogOut, User, List, Trophy } from "lucide-react";
import { avatarImage } from "@/placeholders";

function NavMenu() {
  const { data: session } = useSession();
  // const username = "Francesco";
  const username = useMemo(
    () => fitUsername(session?.user.username || "usuario"),
    [session?.user.username]
  );
  const picture = avatarImage;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="mt-1 text-3xl md:text-4xl">{username}</span>
            <Avatar className="h-10 w-auto border-4 border-primary md:h-14">
              <AvatarImage src={picture} alt="Tu Tortuga" />
              <AvatarFallback className="mt-1 bg-transparent text-5xl">
                {username[0] || "S"}
              </AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[250px] flex-col bg-secondary p-2">
              <ListItem href="/profile" title="Perfil" icon={<User />}>
                Información de tu cuenta
              </ListItem>
              <ListItem href="/courses" title="Cursos" icon={<List />}>
                Ver todos los cursos
              </ListItem>
              <ListItem
                href="/courses"
                title="Ranking"
                enabled={false}
                icon={<Trophy />}
              >
                Proximamente
              </ListItem>
              <ListItem
                onClick={() => void signOut()}
                title="Cerrar Sesión"
                icon={<LogOut />}
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a"> & { icon?: ReactNode; enabled?: boolean }
>(
  (
    { className, title, icon, children, href, enabled = true, ...props },
    ref
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={enabled ? href : undefined}
            {...props}
            className={cn(
              "flex w-full select-none items-center justify-between rounded-md p-3 leading-none no-underline outline-none transition-colors  focus:bg-accent focus:text-accent-foreground",
              enabled
                ? "hover:bg-primary hover:text-accent-foreground"
                : "cursor-not-allowed hover:bg-background1/20 hover:text-gray-200/20",
              className
            )}
          >
            <div className="flex flex-col">
              <div className="mt-1 text-xl font-medium leading-none">
                {title}
              </div>
              {children ? (
                <p className="text-muted-foreground text-md line-clamp-2 leading-snug">
                  {children}
                </p>
              ) : (
                <></>
              )}
            </div>
            {icon || <></>}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default NavMenu;
