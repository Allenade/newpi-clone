"use client";

import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { LoginForm } from "./Login-form";
import { useAuth } from "@/app/context/auth-context";

export function Header() {
  const { user, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsLogoutOpen(false);
  };

  return (
    <header className="bg-[#583A89] w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">Sell Your PI Coins</h1>
          <p className="text-white/90">
            Fast, Secure, best rates and Flexible Payout Options
          </p>
        </div>
        {user ? (
          <AlertDialog open={isLogoutOpen} onOpenChange={setIsLogoutOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <User className="h-5 w-5 mr-2" />
                <span>{user.name}</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to log out?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This will end your current session.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>
                  Log out
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <User className="h-5 w-5 mr-2" />
                <span>Guest</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign In</DialogTitle>
                <DialogDescription>
                  Sign in to your account to access all features.
                </DialogDescription>
              </DialogHeader>
              <LoginForm onClose={() => setIsLoginOpen(false)} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
}
